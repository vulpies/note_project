import { createSlice } from "@reduxjs/toolkit"
// import userService from "../services/user.service"

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
            state.usersForAdmin.push(action.payload)
        },
        getUser: (state, action) => {
            state.users = action.payload
            state.auth = true
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

// export const getUsersList = () => async (dispatch) => {
//     try {
//         const data = await userService.getUsers()
//         debugger
//         dispatch(getUsers(data))
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
