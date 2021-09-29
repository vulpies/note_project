import React from "react"
import { useParams } from "react-router-dom"

const OpenedNote = () => {
    const { noteId } = useParams()
    console.log(noteId)

    return (
        <>
            <p>ID: {noteId}</p>
        </>
    )
}

export default OpenedNote
