import React, { useEffect, useState } from "react"
import userService from "../services/user.service"

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await userService.get()
                console.log(response.data)
                return setUsers(response.data)
            } catch (error) {}
        }
        getUsers()
    }, [])

    return (
        <>
            <div>
                <h2>Users List:</h2>
                {users?.length ? (
                    <ul>
                        {users.map((user) => (
                            <li key={user._id}>{user.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>На данный момент никто не зарегистирован</p>
                )}
            </div>
        </>
    )
}

export default Users
