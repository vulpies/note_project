import { axios } from "axios"

const url = "http://localhost:4000/api/"

const userService = {
    getUsers: async () => {
        const { data } = await axios.get(url + "users/")
        return data
    },
    getNotes: async () => {
        const { data } = await axios.get(url + "/notes")
        return data
    },
}
export default userService
