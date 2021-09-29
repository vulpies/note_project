import React from "react"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"

const FormButtons = () => {
    return (
        <div className="form__buttons">
            <Button variant="outlined" size="small" className="btns btns-first">
                <Link to="/notes">Войти</Link>
            </Button>
            <Button variant="contained" size="small" className="btns">
                <Link to="/registration">Зарегистрироваться</Link>
            </Button>
        </div>
    )
}

export default FormButtons
