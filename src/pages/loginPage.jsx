import React from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import ValidateForm from "../components/login_form/validateForm"
import NavBar from "../components/navbar/navBar"
import styles from "../pages/registration/registration.module.css"
import authService from "../services/auth.service"
import localStorageService from "../services/localStorage.service"
import { getUsers } from "../store/usersSlice"

const LoginPage = () => {
    const dispatch = useDispatch()
    let history = useHistory()

    const submitFunction = async (payload) => {
        const response = await authService.login(payload)

        if (response?.tokens) {
            localStorageService.setTokens(
                response.tokens,
                response.userId,
                response.role
            )
            localStorage.setItem("email", payload.email)
            dispatch(getUsers(payload))
            history.push("/notes")
        }
        return response
    }
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
                        submitFunction={submitFunction}
                    />
                </div>
            </div>
        </>
    )
}

export default LoginPage
