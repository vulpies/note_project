import React, { useEffect, useState } from "react"
import NavBar from "../../menu/navBar"
import BackToMainPage from "./buttons/backToMainPage"
import CommonBtn from "./buttons/commonBtn"
import { getById } from "../../fake_api/notes.api"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"

const EditNotePage = () => {
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
                styles={{ marginTop: "50%" }}
            />
        )
        /* не забыть отцентровать спиннер */
    }

    function db(asd) {
        console.log(asd)
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

                <div className="notes__btn">
                    <button className="notes__btn-common notes__btn-open">
                        Сохранить
                    </button>
                    {/* Обновлять массив */}
                    <CommonBtn name="Отменить" />
                </div>
            </div>
        </>
    )
}

export default EditNotePage
