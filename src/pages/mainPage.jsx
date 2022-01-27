import React from "react"
import { Link } from "react-router-dom"
import buttons from "../components/buttons/buttons.module.css"

const MainPage = () => {
    return (
        <>
            <div className="main main__div">
                <h1>Добро пожаловать!</h1>
                <p>
                    Для просмотра контента, пожалуйста, войдите или
                    зарегистрируйтесь.
                </p>
                <div className={buttons.mainBtns}>
                    <Link
                        to="/login"
                        className={`${buttons.form} ${buttons.logIn}`}
                    >
                        Войти
                    </Link>
                    <Link
                        to="/registration"
                        className={`${buttons.form} ${buttons.reg}`}
                    >
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MainPage
