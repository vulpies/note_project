import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ul className="navbar justify-content-end">
            <li className="admin-nav">
                <Link to="/admin">Админка</Link>
            </li>
            <li>
                <Link to="/">Войти / Выйти</Link>
            </li>
        </ul>
    )
}

export default NavBar
