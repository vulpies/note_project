import React, { useEffect } from "react"
import NavBar from "../../components/navbar/navBar"
import { Link, useParams } from "react-router-dom"
import BackToMainPage from "../../components/buttons/backToMainPage"
import { Spinner } from "react-bootstrap"
import CommonLinkBtn from "../../components/buttons/commonLinkBtn"
import buttons from "../../components/buttons/buttons.module.css"
import notesStyle from "./notePage.module.css"
import { getNote } from "../../store/notesSlice"
import { useDispatch } from "react-redux"
import OpenModal from "../../components/modal/modalRemove"
import { useHttp } from "../../hooks/useHttp"

const NotePage = () => {
    const { noteId } = useParams()
    const dispatch = useDispatch()
    const { request } = useHttp()

    const note = dispatch(getNote(noteId))
    // console.log(note.title, "note.title")

    const url = `http://localhost:4000/api/notes/${noteId}`

    useEffect(() => {
        request(url)
            .then((res) => console.log(res, "got it finally!"))
            .then((data) => dispatch(getNote(data)))
            .catch((err) => console.log(err))
    }, [])

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
