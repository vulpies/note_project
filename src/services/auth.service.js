import axios from "axios"
import localStorageService from "./localStorage.service"

const authService = {
    register: async (payload) => {
        const { data } = await axios.post(
            "http://localhost:4000/api/auth/registration",
            payload
        )
        return data
    },
    login: async ({ email, password }) => {
        console.log("666")
        const { data } = await axios.post(
            "http://localhost:4000/api/auth/login",
            {
                email,
                password,
                returnSecureToken: true,
            }
        )
        return data
    },
    logout: () => {
        localStorageService.removeAuthData()
    },
    refresh: async () => {
        const { data } = await axios.post("token", {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken(),
        })
        return data
    },
}
export default authService
