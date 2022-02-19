const express = require("express")
const router = express.Router({ mergeParams: true })
const User = require("../models/User")
const Role = require("../models/Role")
const bcrypt = require("bcryptjs")
const { check, validationResult } = require("express-validator")
const tokenService = require("../services/token.service")

router.post("/registration", [
    check("email", "Некорректный email").isEmail(),
    check("password", "Пароль должен содержать от 5 до 20 символов").isLength({
        min: 5,
        max: 20,
    }),

    async (req, res) => {
        try {
            const { email, password } = req.body
            const newUser = await User.findOne({ email })

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: "Ошибка при регистрации",
                    },
                })
            }

            if (newUser) {
                return res.status(409).json({
                    error: {
                        message:
                            "Такой email уже зарегистрирован, используйте другой",
                    },
                })
            }

            const userRole = await Role.findOne({ value: "USER" })
            const hashedPass = await bcrypt.hash(password, 10)
            const user = await User.create({
                email,
                password: hashedPass,
                role: userRole.value,
            })

            const tokens = tokenService.generate({
                _id: user._id,
                role: user.role,
            })
            await tokenService.save(user._id, tokens.refreshToken)

            return res.json({ message: "Пользователь успешно зарегистрирован" })
        } catch (error) {
            return res.status(400).json({
                error: {
                    message: "Ошибка при регистрации",
                },
            })
        }
    },
])

router.post("/login", [
    check("email", "Некорректный email").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),

    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message:
                            "Ошибка входа в систему, проверьте правильность ввода данных",
                    },
                })
            }

            const { email, password } = req.body

            const user = await User.findOne({ email })
            const validPass = await bcrypt.compare(password, user.password)

            if (!user) {
                return res.status(401).json({
                    error: {
                        message: "Такой email не зарегистрирован",
                    },
                })
            }

            if (!validPass) {
                return res.status(400).json({
                    error: {
                        message: "Неверный пароль",
                    },
                })
            }

            const tokens = tokenService.generate({
                _id: user._id,
            })

            await tokenService.save(user._id, tokens.refreshToken)

            return res.send({ tokens, role: user.role, userId: user._id })
        } catch (error) {
            return res.status(400).json({
                error: {
                    message: "Такой email не зарегистрирован",
                },
            })
        }
    },
])

function isTokenInvalid(data, dbToken) {
    return !data || !dbToken || data._id !== dbToken?.user?.toString()
}

router.post("/token", async (req, res) => {
    try {
        const { refresh_token: refreshToken } = req.body
        const data = tokenService.validateRefresh(refreshToken)
        const dbToken = await tokenService.findToken(refreshToken)

        if (isTokenInvalid(data, dbToken)) {
            return res
                .status(401)
                .json({ message: "У вас нет доступа для данного запроса" })
        }

        const tokens = await tokenService.generate({
            _id: data._id,
        })
        await tokenService.save(data._id, tokens.refreshToken)

        res.status(200).send({ ...tokens, userId: data._id })
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

module.exports = router
