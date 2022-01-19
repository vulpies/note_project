import React from "react"
import NavBar from "../../../menu/navbar/navBar"
import { Link, useParams } from "react-router-dom"
import BackToMainPage from "../buttons/backToMainPage"
import { Spinner } from "react-bootstrap"
import CommonLinkBtn from "../buttons/commonLinkBtn"
import buttons from "../buttons/buttons.module.css"
import notesStyle from "./notePage.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getNoteById } from "../../../store/notes-actions"

const NotePage = () => {
    const dispatch = useDispatch()
    const { noteId } = useParams()
    const note = useSelector(getNoteById(noteId))
    console.log(note)

    if (!note) {
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
