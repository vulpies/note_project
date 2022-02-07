import React from "react"
import { useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import localStorageService from "../../services/localStorage.service"
// import { userLogout } from "../../store/usersSlise"
import nav from "./navbar.module.css"

const NavBar = () => {
    const users = useSelector((state) => state.usersReducer)
    // const dispatch = useDispatch()
    let history = useHistory()

    const handleLogout = async () => {
        // dispatch(userLogout())
        localStorageService.removeAuthData()
        history.push("/")
    }

    /*  после получения юзеров из стейта
if(users) {
    users.filter((user)=>
    if(user.role === "ADMIN"){
        тогда показываем "Выйти" + админку
    } else {
        только "Выйти"
    }
} else {
    "Войти"
}*/

    return (
        <ul className={nav.navbar}>
            {users.users.map((user) => user.role === "ADMIN") ? (
                <li className={nav.admin}>
                    <Link to="/users">Админка</Link>
                </li>
            ) : (
                ""
            )}

            {users.auth === true ? (
                <li>
                    <a href="" onClick={handleLogout}>
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
