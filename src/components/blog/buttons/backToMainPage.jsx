import React from "react"
import { Link } from "react-router-dom"

const BackToMainPage = () => {
    return (
        <div className="btn-div">
            <Link to="/notes" className="notes__btn-common notes__btn-add">
                На главную
            </Link>
        </div>
    )
}

export default BackToMainPage
