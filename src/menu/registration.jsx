import React from "react"
import NavBar from "./navBar"
import LoginPage from "../components/logIn/login-form/loginPage"

const Registration = () => {
    return (
        <>
            <NavBar />
            <h1 className="main__div">Регистрация</h1>
            <p>Пожалуйста, заполните форму ниже.</p>
            <LoginPage />
        </>
    )
}

export default Registration
