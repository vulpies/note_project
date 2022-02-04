import axios from "axios"
import httpService from "../../services/http.service"

export const GET_USERS = "GET_USERS"
export const GET_USER = "GET_USER"
export const GET_NOTES = "GET_NOTES"
export const ADD_USER = "ADD_USER"

export const registration = async (email, password) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/api/auth/registration",
            {
                email,
                password,
            }
        )
        console.log(response.data.message)
    } catch (error) {
        console.log(error.response.data.message)
    }
}

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                "http://localhost:4000/api/auth/login",
                {
                    email,
                    password,
                }
            )
            console.log(response.data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
}

export async function getUserNotes(email) {
    try {
        const response = await httpService.getUserNotes()
        // dispatch(blabla(email))
        console.log(response.data.message)
    } catch (error) {
        console.log(error.response.data.message)
    }
}

export function addUser(email, password) {
    return {
        type: ADD_USER,
        payload: {
            email,
            password,
        },
    }
}
