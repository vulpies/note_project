import { createSlice } from "@reduxjs/toolkit"
import { addNote } from "./notesSlice"

const initialState = {
    users: [],
    auth: false,
    notes: [],
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        getUser: (state, action) => {
            state.users = action.payload
            state.auth = true
        },
        getUsers: (state) => {
            state.users = state.users.filter((user) => user.role === "USER")
        },
        userLogout: (state) => {
            state.users = null
            state.auth = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addNote, (state, action) => {
                state.notes = action.payload
            })
            .addDefaultCase(() => {})
    },
})

const { actions, reducer } = usersSlice

export default reducer
export const { addUser, getUser, getUsers, userLogout } = actions
