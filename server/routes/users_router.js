const express = require("express")
const router = express.Router({ mergeParams: true })
const User = require("../models/User")
const authMiddleware = require("../middleware/auth_middleware")
const querystring = require("querystring")

//Get all users
router.get("/", authMiddleware, async (req, res) => {
    const searchParams = req.url
    const decodedStr = decodeURIComponent(searchParams)
    const newgv = decodedStr.slice(2)
    const { email } = querystring.parse(newgv)

    try {
        if (email) {
            const users = await User.find()
            res.json(users)
        }
    } catch (error) {
        return res.status(400).json({
            message: "Ошибка в получении пользователей",
        })
    }
})

module.exports = router
