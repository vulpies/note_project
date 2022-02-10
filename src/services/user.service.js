import { axios } from "axios"

const url = "http://localhost:4000/api/"

const userService = {
    getUsers: async (payload) => {
        try {
            const { data } = await axios.get(url + "users/")
            console.log(data, "5555")
            return data
        } catch (error) {
            console.log(error, "error")
        }
    },
    getNotes: async () => {
        try {
            const { data } = await axios.get(url + "notes/")
            console.log(data, "data2222")
            return data
        } catch (error) {
            console.log(error, "error")
        }
    },
    createNote: async (payload) => {
        const { data } = await axios.post(url + "notes/", payload)
        return data
    },
}
export default userService
