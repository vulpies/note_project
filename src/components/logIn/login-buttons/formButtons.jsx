import React from "react"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import style from "./formButtons.modules.css"

const FormButtons = () => {
    return (
        <div className={style.buttons}>
            <Link to="/notes">
                <Button
                    variant="outlined"
                    size="small"
                    className="btns btns-first"
                >
                    Войти
                </Button>
            </Link>
            <Link to="/registration">
                <Button variant="contained" size="small" className="btns">
                    Зарегистрироваться
                </Button>
            </Link>
        </div>
    )
}

export default FormButtons
