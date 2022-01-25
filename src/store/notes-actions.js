export const ADD_NOTE = "ADD_NOTE"
export const UPD_NOTE = "UPD_NOTE"
export const REMOVE_NOTE = "REMOVE_NOTE"

export const getNoteById = (noteId) => (state) => {
    if (state.notesReducer.notes) {
        return state.notesReducer.notes.find((n) => n._id === Number(noteId))
    }
}

export const removeNoteById = (noteId) => (state) => {
    if (state.notesReducer.notes) {
        return state.notesReducer.notes.filter((n) => n._id !== Number(noteId))
    }
}
