import { ADD_NOTE, REMOVE_NOTE, UPD_NOTE } from "./notes-actions"

const initialState = {
    notes: [],
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            return { ...state, notes: [...state.notes, action.payload] }
        }
        case UPD_NOTE: {
            const { id, title, description } = action.payload
            return {
                ...state,
                notes: [
                    ...state.notes.map((note) => {
                        if (note._id === id) {
                            return { ...note, title, description }
                        }
                        return note
                    }),
                ],
            }
        }
        case REMOVE_NOTE: {
            const id = action.payload
            return {
                notes: [...state.notes.filter((n) => n._id !== id)],
            }
        }
        default:
            return { ...state }
    }
}

export default notesReducer
