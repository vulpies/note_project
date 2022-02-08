import React from "react"
import { useSelector } from "react-redux"
// import userService from "../services/user.service"

const Users = () => {
    const users = useSelector((state) => state.usersReducer)
    let info = Object.values(users)[0]

    console.log(info, "111")
    // console.log(info.email, "2222")
    // console.log(users, "3333")

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
