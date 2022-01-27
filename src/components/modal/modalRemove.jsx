import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import { Button } from "react-bootstrap"
import buttons from "../buttons/buttons.module.css"
import CommonLinkBtn from "../buttons/commonLinkBtn"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { removeNoteById } from "../../store/notes-actions"

const OpenModal = ({ text, name }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const dispatch = useDispatch()

    const { noteId } = useParams()
    console.log(noteId)

    const removeNote = (noteId) => {
        dispatch(removeNoteById(noteId))
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
                        onClick={removeNote}
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
