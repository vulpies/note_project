import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHttp } from "../hooks/useHttp"
import { getUsers } from "../store/usersSlice"

const Users = () => {
    const { request } = useHttp()
    const { users } = useSelector((state) => state.usersReducer)
    const dispatch = useDispatch()
    // const getRole = localStorageService.getUserRole()
    console.log(users)
    // const payload = {
    //     email: users.email,
    //     password: users.password,
    //     role: getRole,
    // }

    const getUsersList = async () => {
        request("http://localhost:4000/api/notes")
            .then((req) => dispatch(getUsers(req)))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getUsersList()
    }, [])

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
