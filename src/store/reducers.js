import { combineReducers } from "redux"
import notesReducer from "./notes/notes-reducer"
import usersReducer from "./users/users-reducer"

const rootReducer = combineReducers({
    notesReducer: notesReducer,
    usersReducer: usersReducer,
})

export default rootReducer
