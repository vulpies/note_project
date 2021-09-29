import React from "react"
import FormLogIn from "../logIn/formLogIn"
import Button from "@mui/material/Button"
import NavBar from "../../menu/navBar"

const Registration = () => {
    return (
        <>
            <NavBar />
            <h1 className="main__div">Регистрация</h1>
            <p>Пожалуйста, заполните форму ниже.</p>
            <FormLogIn className="regForm" boxStyle="regBoxForm" />
            <Button variant="contained" size="small" className="btns">
                Зарегистрироваться
            </Button>
        </>
    )
}

export default Registration
