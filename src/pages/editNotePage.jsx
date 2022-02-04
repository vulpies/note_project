import React, { useState } from "react"
import NavBar from "../components/navbar/navBar"
import BackToMainPage from "../components/buttons/backToMainPage"
import { Spinner } from "react-bootstrap"
import { useParams, useHistory } from "react-router-dom"
import buttons from "../components/buttons/buttons.module.css"
import CommonLinkBtn from "../components/buttons/commonLinkBtn"
import styles from "./create_note/createNote.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getNoteById, updNote } from "../store/notes/notes-actions"

const EditNotePage = () => {
    const { noteId } = useParams()
    const note = useSelector(getNoteById(noteId))

    const [title, setTitle] = useState(note.title)
    const [description, setDescription] = useState(note.description)

    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        history.push(`/notes/${noteId}`)
    }

    const handleChange = () => {
        dispatch(
            updNote({
                _id: note._id,
                title,
                description,
            })
        )
        history.push(`/notes/${noteId}`)
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
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <p className={styles.subtitle}>Описание:</p>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
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
