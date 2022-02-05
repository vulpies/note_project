// import localStorageService from "../../services/localStorage.service"
import { GET_USERS, GET_USER, GET_USER_NOTES, ADD_USER } from "./users-types"

const initialState = {
    users: [],
    //юезры должны изначально подгружаться из базы => ошибка, потому что их нет, и прога сравнивает с пустым
    //здесь должен быть токен, но это не точно
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        //для админки
        /* 1. берем юзера, если у него роль "админ", то выдаем ему список ВСЕХ юзеров
        2. если нет, то ошибку */
        case GET_USERS: {
            return {
                ...state,
                users: [
                    ...state.users.filter((user) => {
                        if (user.role === "ADMIN") {
                            return { ...user } //нужны все юзеры с их инфой
                        }
                        return user
                    }),
                ],
            }
        }

        //при логине
        /* 1. получить юзера +
        2. у него должны быть email, password, accessToken??? */
        case GET_USER: {
            const { email } = action.payload
            return {
                ...state,
                users: [
                    ...state.users.filter((user) => {
                        if (user.email === email) {
                            console.log("ГРАЦ!")
                        }
                        return user
                    }),
                ],
            }
        }

        //РАБОТАЕТ!
        case ADD_USER: {
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        }

        case GET_USER_NOTES: {
            const { email } = action.payload
            return {
                ...state,
                users: [
                    ...state.users.filter((user) => {
                        if (user.email === email) {
                            return { ...user.notes }
                        }
                        return user
                    }),
                ],
            }
        }

        default:
            return { ...state }
    }
}

export default usersReducer
