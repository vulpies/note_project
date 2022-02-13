import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import localStorageService from "../../services/localStorage.service"
import { userLogout } from "../../store/usersSlice"
import nav from "./navbar.module.css"

const NavBar = () => {
    const users = useSelector((state) => state.usersReducer)
    const dispatch = useDispatch()
    const userRole = localStorageService.getUserRole()

    const handleLogout = async () => {
        dispatch(userLogout())
        localStorageService.removeAuthData()
        localStorage.clear()
    }

    return (
        <ul className={nav.navbar}>
            {(users.auth === true && userRole) === "ADMIN" ? (
                <li className={nav.admin}>
                    <Link to="/users">Админка</Link>
                </li>
            ) : (
                ""
            )}

            {users.auth === true ? (
                <li>
                    <a href="/" onClick={handleLogout}>
                        Выйти
                    </a>
                </li>
            ) : (
                <li>
                    <Link to="/login">Войти</Link>
                </li>
            )}
        </ul>
    )
}

export default NavBar
