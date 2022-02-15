import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    notes: [],
    note: null,
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
        },
        updNote: (state, action) => {
            const a =
                state.notes.filter((n) => n._id !== action.payload._id) || []
            state.notes = [...a, action.payload]
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter((n) => n._id !== action.payload)
        },
        getNote: (state, action) => {
            state.note = state.notes.find((n) => n._id === action.payload)
        },
        getNotes: (state, action) => {
            state.notes = action.payload
        },
    },
})

const { actions, reducer } = notesSlice

export default reducer
export const { addNote, removeNote, updNote, getNotes, getNote } = actions

export const getNoteById = (noteId) => (state) => {
    return state.notesReducer.notes.find((n) => n._id === Number(noteId))
}
