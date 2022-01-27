import React from "react"
import { Link } from "react-router-dom"
import ValidateForm from "../../components/login_form/validateForm"
import NavBar from "../../components/navbar/navBar"
import styles from "./registration.module.css"

const Registration = () => {
    return (
        <>
            <NavBar />
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <p className={styles.info}>
                        Заполните данную форму, чтобы зарегистрироваться в
                        системе и получить доступ к контенту.
                    </p>
                    <p className={styles.info}>
                        После успешной регистрации вы будете автоматически
                        перенаправлены на главную страницу блога.
                    </p>
                    <p className={styles.info}>
                        Если у вас уже есть аккaунт,
                        <Link to="/login">войдите</Link> в систему
                    </p>
                </div>
                <div className={styles.form}>
                    <ValidateForm
                        formName={"Регистрация"}
                        btnName={"Зарегистрироваться"}
                    />
                </div>
            </div>
        </>
    )
}

export default Registration
