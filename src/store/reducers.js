import { combineReducers } from "redux"
import notesReducer from "./notes/notes-reducer"
import usersReducer from "./usersSlise"

const rootReducer = combineReducers({
    notesReducer,
    usersReducer,
})

export default rootReducer
