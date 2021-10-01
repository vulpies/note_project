import React, { useEffect, useState } from "react"
import NavBar from "../../menu/navBar"
import { Link, useParams } from "react-router-dom"
import BackToMainPage from "./buttons/backToMainPage"
import { getById } from "../../fake_api/notes.api"
import { Spinner } from "react-bootstrap"
import CommonBtn from "./buttons/commonBtn"

const NotePage = () => {
    const { noteId } = useParams()

    const [note, setNote] = useState("loading")

    useEffect(() => {
        setNote("loading")
        const data = getById(noteId)
        if (data) setNote(data)
    }, [noteId])

    if (note === "loading") {
        return <Spinner animation="border" variant="primary" />
        /* не забыть отцентровать спиннер */
    }

    return (
        <>
            <NavBar />
            <BackToMainPage />
            <div className="opened-notes">
                <h3>{note.title}</h3>
                <p>{note.description}</p>

                <div className="notes__btn">
                    <Link to={`/notes/editnote/${noteId}`}>
                        <CommonBtn name="Редактировать" />
                    </Link>
                    <button
                        className="notes__btn-common notes__btn-remove"
                        // onClick={() => onRemove(note._id)}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </>
    )
}

export default NotePage
