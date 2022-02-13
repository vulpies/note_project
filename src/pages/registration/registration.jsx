import React from "react"
import { Link, useHistory } from "react-router-dom"
import ValidateForm from "../../components/login_form/validateForm"
import NavBar from "../../components/navbar/navBar"
import styles from "./registration.module.css"
// import authService from "../../services/auth.service"
import { useDispatch } from "react-redux"
import { addUser } from "../../store/usersSlice"
import { useHttp } from "../../hooks/useHttp"

const Registration = () => {
    const dispatch = useDispatch()
    let history = useHistory()
    const { request } = useHttp()

    const submitFunction = (payload) => {
        // const response = await authService.register(payload)

        request(
            "http://localhost:4000/api/auth/registration",
            "POST",
            JSON.stringify(payload)
        )
            .then((data) =>
                console.log(data, "Новый пользователь успешно зарегистрирован!")
            )
            .then(() => {
                dispatch(addUser(payload))
                history.push("/login")
            })
            .catch((err) => {
                if (err) {
                    history.push("/registration")
                    console.log(err)
                }
            })
    }

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
                        перенаправлены на страницу входа.
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
                        submitFunction={submitFunction}
                    />
                </div>
            </div>
        </>
    )
}

export default Registration
