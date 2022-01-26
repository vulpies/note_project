import React, { useState } from "react"
import { useForm } from "react-hook-form"
import style from "./commonForm.module.css"
import buttons from "../../blog/buttons/buttons.module.css"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useHistory } from "react-router-dom"

const ValidateForm = ({ formName, btnName }) => {
    const [showPass, setShowPass] = useState(false)

    const togglePassVisible = (e) => {
        e.preventDefault()
        setShowPass((prevState) => !prevState)
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange" })

    const onSubmit = () => {
        alert("Добро пожаловать!")
        reset()
        history.push("/notes")
    }

    let history = useHistory()

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
                            value: 8,
                            message: "Минимальная длина пароля 8 символов",
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
                </div>

                <input
                    type="submit"
                    disabled={!isValid}
                    className={`${buttons.common} ${buttons.reg}`}
                    value={btnName}
                    onClick={onSubmit}
                />
            </div>
        </form>
    )
}

export default ValidateForm
