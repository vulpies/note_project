import React, { useState } from "react"
import NavBar from "../components/navbar/navBar"
import BackToMainPage from "../components/buttons/backToMainPage"
import { Spinner } from "react-bootstrap"
import { useParams, useHistory } from "react-router-dom"
import buttons from "../components/buttons/buttons.module.css"
import CommonLinkBtn from "../components/buttons/commonLinkBtn"
import styles from "./create_note/createNote.module.css"
import { useDispatch, useSelector } from "react-redux"
import { updNote } from "../store/notesSlice"
import { useHttp } from "../hooks/useHttp"

const EditNotePage = () => {
    const notes = useSelector((state) => state.notesReducer.note)
    const { noteId } = useParams()
    const { request } = useHttp()

    const [title, setTitle] = useState(notes.title)
    const [description, setDescription] = useState(notes.description)

    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        history.push(`/notes/${noteId}`)
    }

    const handleChange = () => {
        const payload = {
            _id: notes._id,
            title,
            description,
        }
        dispatch(updNote(payload))
        request(
            `http://localhost:4000/api/notes/${noteId}`,
            "PUT",
            JSON.stringify(payload)
        )
            .then((res) => console.log(res, "Заметка обновлена!"))
            .then(() => {})
            .catch((err) => console.log(err))
        history.push(`/notes/${noteId}`)
    }

    if (!notes) {
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
                        onClick={() => handleChange()}
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
