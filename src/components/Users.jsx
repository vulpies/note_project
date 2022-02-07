import React from "react"
import { useSelector } from "react-redux"
// import userService from "../services/user.service"

const Users = () => {
    const users = useSelector((state) => state.usersReducer)

    console.log(users)

    // const getUsers = async () => {
    //     try {
    //         const response = await userService.get()
    //         console.log(response, "66666")
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    return (
        <>
            {/* <div>
                <h2>Users List:</h2>
                {users.users.length ? (
                    <ul>
                        {users.map((user) => (
                            <li key={user._id}>{user.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>На данный момент никто не зарегистрирован</p>
                )}
                {getUsers}
            </div> */}
            {/* <div>{users.users}</div> */}
        </>
    )
}

export default Users
