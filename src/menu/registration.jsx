import React from "react"
import FormLogIn from "../components/logIn/login-form/formLogIn"
import Button from "@mui/material/Button"
import NavBar from "./navBar"

const Registration = () => {
    return (
        <>
            <NavBar />
            <h1 className="main__div">Регистрация</h1>
            <p>Пожалуйста, заполните форму ниже.</p>
            <FormLogIn />
            <Button variant="contained" size="small" className="btns" disabled>
                Зарегистрироваться
            </Button>
        </>
    )
}

export default Registration
