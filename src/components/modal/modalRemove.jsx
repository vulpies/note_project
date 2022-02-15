import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import { Button } from "react-bootstrap"
import buttons from "../buttons/buttons.module.css"
import CommonLinkBtn from "../buttons/commonLinkBtn"
import { useDispatch } from "react-redux"
import { removeNote } from "../../store/notesSlice"
import { useHistory } from "react-router-dom"
import { useHttp } from "../../hooks/useHttp"

const OpenModal = ({ text, name, noteId }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const dispatch = useDispatch()
    const { request } = useHttp()

    let history = useHistory()

    let url = new URL(`http://localhost:4000/api/notes/${noteId}/`)
    url.searchParams.set("email", localStorage.getItem("email"))

    const deleteNote = (noteId) => {
        request(url, "DELETE")
            .then(() => dispatch(removeNote(noteId)))
            .catch((err) => console.log(err))
        history.push("/notes")
    }

    return (
        <>
            <Button
                className={`${buttons.common} ${buttons.remove}`}
                onClick={() => setShow(true)}
            >
                {name}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="modal-50w"
                style={{ marginTop: "50px" }}
            >
                <Modal.Header>
                    <Modal.Title>Уведомление</Modal.Title>
                    <CommonLinkBtn
                        className={`${buttons.common} ${buttons.remove}`}
                        onClick={handleClose}
                        name="X"
                    />
                </Modal.Header>

                <Modal.Body>
                    <p>{text}</p>
                </Modal.Body>

                <Modal.Footer>
                    <CommonLinkBtn
                        className={`${buttons.common} ${buttons.remove}`}
                        onClick={() => deleteNote(noteId)}
                        name="Удалить"
                    />
                    <CommonLinkBtn
                        className={`${buttons.common} ${buttons.open}`}
                        onClick={handleClose}
                        name="Отмена"
                    />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default OpenModal
