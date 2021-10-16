import React, { useState, useEffect } from "react"
import CommonBtn from "../../blog/buttons/commonLinkBtn"
import buttons from "../../blog/buttons/buttons.module.css"
import style from "./commonForm.module.css"
// import AllNotesPage from "../../blog/notes/allNotesPage"
import { Link } from "react-router-dom"

const CommonForm = ({ formName, btnName }) => {
    const [values, setValues] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(values))
        setIsSubmit(true)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors])

    const validate = (value) => {
        const errors = {}

        if (!value.email.trim()) {
            errors.email = "Обязательно для заполнения"
        } else if (
            !/[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/gim.test(values.email)
        ) {
            errors.email = "Некорректный email"
        }

        if (!value.password) {
            errors.password = "Обязательно для заполнения"
        } else if (values.password.length < 6) {
            errors.password = "Пароль должен содержать минимум 6 символов"
        } else if (values.password.length > 20) {
            errors.password = "Пароль может содержать не более 20 символов"
        }
        return errors
    }

    return (
        <>
            {Object.keys(errors).length === 0 && isSubmit ? (
                <Link path="/notes" /> //don't work????
            ) : (
                ""
            )}
            <form className={style.form} onSubmit={handleSubmit}>
                <h2>{formName}</h2>
                <div className={style.wrapper}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className={style.input}
                        placeholder="Введите email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <p className={style.error}>{errors.email}</p>
                    )}
                </div>

                <div className={style.wrapper}>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className={style.input}
                        placeholder="Введите пароль"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <p className={style.error}>{errors.password}</p>
                    )}
                </div>
                <div className={style.btn}>
                    <CommonBtn
                        className={`${buttons.common} ${buttons.reg}`}
                        name={btnName}
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </>
    )
}

export default CommonForm