import React from "react"
import { Link } from "react-router-dom"
// import CommonForm from "../components/logIn/login-form/commonForm"
import ValidateForm from "../components/logIn/login-form/validateForm"
import NavBar from "./navbar/navBar"
import styles from "./registration/registration.module.css"

const LoginPage = () => {
    return (
        <>
            <NavBar />
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <p className={styles.info}>
                        Заполните данную форму для входа в систему и получения
                        доступа к контенту.
                    </p>
                    <p className={styles.info}>
                        Если у вас еще нет аккaунта, тогда сначала
                        <Link to="/registration">зарегистрируйтесь</Link> для
                        входа в систему.
                    </p>
                </div>
                <div className={styles.form}>
                    <ValidateForm
                        formName={"Вход в систему"}
                        btnName={"Войти"}
                    />
                </div>
            </div>
        </>
    )
}

export default LoginPage
