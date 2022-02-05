import httpService from "../../services/http.service"
import { ADD_USER, GET_USER } from "./users-types"

export function addUser(...args) {
    return {
        type: ADD_USER,
        payload: { ...args },
    }
}

export function getUser(...args) {
    return {
        type: GET_USER,
        payload: { ...args },
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
