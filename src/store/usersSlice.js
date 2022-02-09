import { createSlice } from "@reduxjs/toolkit"
// import { addNote, updNote, removeNote } from "./notesSlice"
import userService from "../services/user.service"

const initialState = {
    users: [],
    auth: false,
    // notes: [],
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
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(addNote, (state, action) => {
    //             state.notes = action.payload
    //         })
    //         .addCase(updNote, (state, action) => {
    //             const a = state.notes.filter(
    //                 (n) => n._id !== action.payload._id
    //             )
    //             state.notes = [...a, action.payload]
    //         })
    //         .addCase(removeNote, (state, action) => {
    //             state.notes = state.notes.filter(
    //                 (n) => n._id !== action.payload
    //             )
    //         })
    //         .addDefaultCase(() => {})
    // },
})

const { actions, reducer } = usersSlice

export default reducer
export const { addUser, getUser, getUsers, userLogout } = actions

export const getUsersList = () => async (dispatch) => {
    try {
        const data = await userService.getUsers()
        debugger
        dispatch(getUsers(data))
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
