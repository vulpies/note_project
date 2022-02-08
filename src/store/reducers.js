import { combineReducers } from "redux"
import notesReducer from "./notesSlice"
import usersReducer from "./usersSlice"

const rootReducer = combineReducers({
    notesReducer,
    usersReducer,
})

export default rootReducer
