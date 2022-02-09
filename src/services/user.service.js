import { axios } from "axios"

const url = "http://localhost:4000/api/"

const userService = {
    getUsers: async () => {
        try {
            const { data } = await axios.get(url + "users/")
            console.log(data, "5555")
            return data
        } catch (error) {
            console.log(error, "error")
        }
    },
    getNotes: async () => {
        const { data } = await axios.get(url + "notes/")
        return data
    },
    createNote: async (payload) => {
        const { data } = await axios.post(url + "notes/", payload)
        return data
    },
}
export default userService
