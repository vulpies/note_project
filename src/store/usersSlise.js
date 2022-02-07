import { createSlice } from "@reduxjs/toolkit"
// import localStorageService from "../services/localStorage.service"

const initialState = {
    users: [],
    errors: false,
    auth: false,
}

const usersSlise = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        getUser: (state, action) => {
            state.users = state.users.filter(
                (user) =>
                    user.email === action.payload &&
                    user.password === action.payload
            )
            state.auth = true
        },
        getUsers: (state) => {
            state.users = state.users.filter((user) => user.role === "USER")
        },
        userLogout: (state) => {
            state.users = null
            state.auth = null
        },
    },
})

const { actions, reducer } = usersSlise

export default reducer
export const { addUser, getUser, getUsers, userLogout } = actions
