import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHttp } from "../hooks/useHttp"
import { getUsers } from "../store/usersSlice"

const Users = () => {
    const { users } = useSelector((state) => state.usersReducer)
    const dispatch = useDispatch()
    const { request } = useHttp()

    let url = new URL("http://localhost:4000/api/users")
    url.searchParams.set("email", localStorage.getItem("email"))

    useEffect(() => {
        request(url)
            .then((req) => dispatch(getUsers(req)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <div>
                <h2 style={{ color: "red" }}>Users List:</h2>

                {users?.length ? (
                    <ul>
                        {users.map((user) => {
                            return (
                                <li key={user._id} className="user-list">
                                    <b>{user.email}</b>, записей:{" "}
                                    {user.notes.length}
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <p>На данный момент никто не зарегистрирован</p>
                )}
            </div>
        </>
    )
}

export default Users
