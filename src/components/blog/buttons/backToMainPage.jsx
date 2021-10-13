import React from "react"
import { Link } from "react-router-dom"
import buttons from "./buttons.module.css"

const BackToMainPage = () => {
    return (
        <div className={buttons.wrapper}>
            <Link to="/notes" className={`${buttons.common} ${buttons.add}`}>
                На главную
            </Link>
        </div>
    )
}

export default BackToMainPage
