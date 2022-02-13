import React, { useEffect, useRef } from "react"
import NavBar from "../../components/navbar/navBar"
import { Link, useParams } from "react-router-dom"
import BackToMainPage from "../../components/buttons/backToMainPage"
import { Spinner } from "react-bootstrap"
import CommonLinkBtn from "../../components/buttons/commonLinkBtn"
import buttons from "../../components/buttons/buttons.module.css"
import notesStyle from "./notePage.module.css"
import OpenModal from "../../components/modal/modalRemove"
import { useHttp } from "../../hooks/useHttp"
import { useDispatch, useSelector } from "react-redux"
import { getNote } from "../../store/notesSlice"

const NotePage = () => {
    const notes = useSelector((state) => state.notesReducer.note)
    const { noteId } = useParams()
    const { request } = useHttp()
    const dispatch = useDispatch()
    const newList = useRef([notes])

    const url = `http://localhost:4000/api/notes/${noteId}`

    useEffect(() => {
        request(url)
            .then((res) => {
                newList.current = dispatch(getNote(res._id))
            })
            .catch((err) => console.log(err))
    }, [newList.current])

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
            <div className={notesStyle.open}>
                <h3>{notes.title}</h3>
                <p>{notes.description}</p>

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
                        noteId={notes._id}
                    />
                </div>
            </div>
        </>
    )
}

export default NotePage
