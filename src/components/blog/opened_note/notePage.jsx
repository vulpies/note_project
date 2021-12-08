import React, { useEffect, useState } from "react"
import NavBar from "../../../menu/navbar/navBar"
import { Link, useParams } from "react-router-dom"
import BackToMainPage from "../buttons/backToMainPage"
import { getById } from "../../../fake_api/notes.api"
import { Spinner } from "react-bootstrap"
import CommonLinkBtn from "../buttons/commonLinkBtn"
import buttons from "../buttons/buttons.module.css"
import notesStyle from "./notePage.module.css"

const NotePage = () => {
    const { noteId } = useParams()

    const [note, setNote] = useState("loading")

    useEffect(() => {
        setNote("loading")
        const data = getById(noteId)
        if (data) setNote(data)
    }, [noteId])

    if (note === "loading") {
        return (
            <Spinner
                animation="border"
                variant="primary"
                style={{ marginTop: 200 }}
            />
        )
    }

    return (
        <>
            <NavBar />
            <BackToMainPage />
            <div className={notesStyle.open}>
                <h3>{note.title}</h3>
                <p>{note.description}</p>

                <div className={buttons.btns}>
                    <Link to={`/notes/editnote/${noteId}`}>
                        <CommonLinkBtn
                            name="Редактировать"
                            className={`${buttons.common} ${buttons.open}`}
                        />
                    </Link>

                    <CommonLinkBtn
                        name="Удалить"
                        className={`${buttons.common} ${buttons.remove}`}
                    />
                </div>
            </div>
        </>
    )
}

export default NotePage
