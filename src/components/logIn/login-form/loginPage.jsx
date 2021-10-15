import React from "react"
import useForm from "./useForm"
import validate from "./validateInfo"
import CommonBtn from "../../blog/buttons/commonLinkBtn"
import buttons from "../../blog/buttons/buttons.module.css"
import style from "./formLogin.module.css"

const LoginPage = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(
        submitForm,
        validate
    )
    return (
        <>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.wrapper}>
                    <label htmlFor="email">{""}</label>
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
                    <label htmlFor="password">{""}</label>
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
            </form>
            <CommonBtn
                className={`${buttons.common} ${buttons.reg}`}
                name="Зарегистрироваться"
                onClick={handleSubmit}
            />
        </>
    )
}

export default LoginPage
