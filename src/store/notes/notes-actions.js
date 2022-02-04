export const ADD_NOTE = "ADD_NOTE"
export const UPD_NOTE = "UPD_NOTE"
export const REMOVE_NOTE = "REMOVE_NOTE"

export const getNoteById = (noteId) => (state) => {
    if (state.notesReducer.notes) {
        return state.notesReducer.notes.find((n) => n._id === Number(noteId))
    }
}

export function addNote(title, description) {
    return {
        type: ADD_NOTE,
        payload: {
            _id: Date.now(),
            title: title.trim(),
            description: description.trim(),
        },
    }
}

export function updNote(note) {
    return {
        type: UPD_NOTE,
        payload: {
            id: note._id,
            title: note.title,
            description: note.description,
        },
    }
}

export function removeNote(id) {
    return {
        type: REMOVE_NOTE,
        payload: id,
    }
}
