import React from "react"
import { Link } from "react-router-dom"
import nav from "./navbar.module.css"

const NavBar = () => {
    return (
        <ul className={nav.navbar}>
            <li className={nav.admin}>
                <Link to="/users">Админка</Link>
            </li>
            <li>
                <Link to="/">Войти / Выйти</Link>
            </li>
        </ul>
    )
}

export default NavBar
