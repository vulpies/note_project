import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    auth: false,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        getUsers: (state, action) => {
            state.users = action.payload
            state.auth = true
        },
        userLogout: (state) => {
            state.users = null
            state.auth = false
        },
    },
})

const { actions, reducer } = usersSlice

export default reducer
export const { addUser, getUser, getUsers, userLogout } = actions
