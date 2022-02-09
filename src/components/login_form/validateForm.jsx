import React, { useState } from "react"
import { useForm } from "react-hook-form"
import style from "./validateForm.module.css"
import buttons from "../buttons/buttons.module.css"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"

const ValidateForm = ({ formName, btnName, submitFunction, pathName }) => {
    const [showPass, setShowPass] = useState(false)
    const [serverErrors, setServerErrors] = useState("")

    const togglePassVisible = (e) => {
        e.preventDefault()
        setShowPass((prevState) => !prevState)
    }

    const url = `http://localhost:4000/api/auth/${pathName}`
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({ mode: "onBlur" })

    const onSubmit = async () => {
        await submitFunction(getValues())

        setServerErrors([])
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: register.email,
                password: register.password,
            }),
        })
        const data = await res.json()

        if (data.error) {
            setServerErrors(data.error)
        }
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>{formName}</h2>
            <div className={style.wrapper}>
                <input
                    {...register("email", {
                        required: "Поле обязательно к заполнению",
                        onChange: "",
                        pattern:
                            /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,4}$/,
                    })}
                    placeholder="email"
                    className={style.input}
                />

                <div className={style.error}>
                    {errors?.email && (
                        <p>{errors?.email?.message || "Некорректный email!"}</p>
                    )}
                </div>

                <input
                    {...register("password", {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 5,
                            message: "Минимальная длина пароля 5 символов",
                        },
                        maxLength: {
                            value: 20,
                            message: "Максимальная длина пароля 20 символов",
                        },
                    })}
                    type={showPass ? "text" : "password"}
                    placeholder="password"
                    className={style.input}
                    style={{ position: "relative" }}
                />

                <button className={style.passBtn} onClick={togglePassVisible}>
                    {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </button>

                <div className={style.error}>
                    {errors?.password && (
                        <p>
                            {errors?.password?.message ||
                                "Проверьте правильность ввода данных!"}
                        </p>
                    )}
                    {serverErrors?.message}
                </div>

                <input
                    type="submit"
                    className={`${buttons.common} ${buttons.reg}`}
                    value={btnName}
                />
            </div>
        </form>
    )
}

export default ValidateForm
