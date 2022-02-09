import axios from "axios"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import localStorageService from "../services/localStorage.service"

const Users = () => {
    const { users } = useSelector((state) => state.usersReducer)
    const dispatch = useDispatch()
    const getRole = localStorageService.getUserRole()
    console.log(users)
    const payload = {
        email: users.email,
        password: users.password,
        role: getRole,
    }

    console.log(payload, "payload")

    const getUsersList = async () => {
        try {
            const data = await axios.get("http://localhost:4000/api/users")
            console.log(data, "data")
        } catch (error) {
            console.log(error, "error")
        }
    }
    useEffect(() => {
        getUsersList()
    }, [])

    // useEffect(() => {
    //     dispatch(getUsersList())
    // }, [])

    /*     const getUsersList = async () => {
        // const payload = {
        //     email: users.email,
        //     password: users.password,
        // }
        const response = await userService.getUsers()
        console.log(response, "response1111")
    } */
    return (
        <>
            {/* <div>
                <h2>Users List:</h2>
                {info.length ? (
                    <ul>
                        <li key={info._id}>{info.email}</li>
                    </ul>
                ) : (
                    <p>На данный момент никто не зарегистрирован</p>
                )}
            </div> */}
            {/* <div>{info.email}</div> */}
        </>
    )
}

export default Users
