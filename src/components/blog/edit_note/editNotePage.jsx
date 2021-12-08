import React, { useEffect, useState } from "react"
import NavBar from "../../../menu/navbar/navBar"
import BackToMainPage from "../buttons/backToMainPage"
import { getById } from "../../../fake_api/notes.api"
import { Spinner } from "react-bootstrap"
import { useParams, useHistory } from "react-router-dom"
import buttons from "../buttons/buttons.module.css"
import CommonLinkBtn from "../buttons/commonLinkBtn"

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
            <div className="create-note">
                <h2 className="create-note__title">Редактирование заметки</h2>

                <div className="create-note__texts">
                    <p className="create-note__texts-subtitle">Название:</p>
                    <input type="text" defaultValue={note.title} />

                    <p className="create-note__texts-subtitle">Описание:</p>
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
