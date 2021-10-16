import React from "react"
import NavBar from "../navBar"
import CommonForm from "../../components/logIn/login-form/commonForm"
import styles from "./registration.module.css"

const Registration = () => {
    return (
        <>
            <NavBar />
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <h2>Регистрация</h2>
                    <p>Пожалуйста, заполните форму ниже.</p>
                </div>
                <div className={styles.form}>
                    <CommonForm
                        formName={"Регистрация"}
                        btnName={"Зарегистрироваться"}
                    />
                </div>
            </div>
        </>
    )
}

export default Registration
