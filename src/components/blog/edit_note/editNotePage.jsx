import React, { useEffect, useState } from "react"
import NavBar from "../../../menu/navbar/navBar"
import BackToMainPage from "../buttons/backToMainPage"
import { getById } from "../../../fake_api/notes.api"
import { Spinner } from "react-bootstrap"
import { useParams, useHistory } from "react-router-dom"
import buttons from "../buttons/buttons.module.css"
import CommonLinkBtn from "../buttons/commonLinkBtn"
import styles from "../create_note/createNote.module.css"

const EditNotePage = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push(`/notes/${noteId}`)
    }

    const { noteId } = useParams()
    const [note, setNote] = useState("loading")

    debugger

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
                    />
                    {/* Обновлять массив */}
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
