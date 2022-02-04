import localStorageService from "../../services/localStorage.service"
import { GET_USERS, GET_USER, GET_NOTES, ADD_USER } from "./users-actions"

const initialState = localStorageService.getAccessToken()
    ? {
          users: {},
          auth: { userId: localStorageService.getUserId() },
      }
    : {
          users: {},
          auth: null,
      }

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return
        }

        case GET_USER: {
            return
        }

        case ADD_USER: {
            return { ...state, users: [...state.notes, action.payload] }
        }

        case GET_NOTES: {
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
