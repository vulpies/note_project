import React from "react"
import NavBar from "../components/navbar/navBar"
import BackToMainPage from "../components/buttons/backToMainPage"
import { Spinner } from "react-bootstrap"
import { useParams, useHistory } from "react-router-dom"
import buttons from "../components/buttons/buttons.module.css"
import CommonLinkBtn from "../components/buttons/commonLinkBtn"
import styles from "./create_note/createNote.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getNoteById, UPD_NOTE } from "../store/notes-actions"

const EditNotePage = () => {
    const dispatch = useDispatch()
    const { noteId } = useParams()
    const history = useHistory()
    const handleClick = () => {
        history.push(`/notes/${noteId}`)
    }
    const note = useSelector(getNoteById(noteId))
    console.log(note)

    const handleChange = () => {
        const updNote = dispatch({
            type: UPD_NOTE,
            payload: {
                id: note._id,
                title: note.title,
                description: note.description,
            },
        })
        console.log(updNote)
    }

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
            <div className={styles.create}>
                <h2 className={styles.title}>Редактирование заметки</h2>

                <div className={styles.texts}>
                    <p className={styles.subtitle}>Название:</p>
                    <input type="text" defaultValue={note.title} />

                    <p className={styles.subtitle}>Описание:</p>
                    <textarea defaultValue={note.description}></textarea>
                </div>

                <div className={buttons.btns}>
                    <CommonLinkBtn
                        name="Сохранить"
                        className={`${buttons.common} ${buttons.open}`}
                        onClick={handleChange}
                    />
                    <CommonLinkBtn
                        name="Отменить"
                        className={`${buttons.common} ${buttons.open}`}
                        onClick={handleClick}
                    />
                </div>
            </div>
        </>
    )
}

export default EditNotePage
