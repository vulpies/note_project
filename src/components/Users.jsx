import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import userService from "../services/user.service"
import { getUsersList } from "../store/usersSlice"

const Users = () => {
    const { users } = useSelector((state) => state.usersReducer)
    const dispatch = useDispatch()
    console.log(users)

    useEffect(() => {
        dispatch(getUsersList())
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
