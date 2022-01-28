import React from "react"
import NavBar from "../../components/navbar/navBar"
import { Link, useParams } from "react-router-dom"
import BackToMainPage from "../../components/buttons/backToMainPage"
import { Spinner } from "react-bootstrap"
import CommonLinkBtn from "../../components/buttons/commonLinkBtn"
import buttons from "../../components/buttons/buttons.module.css"
import notesStyle from "./notePage.module.css"
import { getNoteById } from "../../store/notes-actions"
import { useSelector } from "react-redux"
import OpenModal from "../../components/modal/modalRemove"

const NotePage = () => {
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
                    <OpenModal
                        name="Удалить"
                        text="Подтверждаете удаление заметки?"
                        noteId={note._id}
                    />
                </div>
            </div>
        </>
    )
}

export default NotePage
