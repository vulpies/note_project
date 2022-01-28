import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import { Button } from "react-bootstrap"
import buttons from "../buttons/buttons.module.css"
import { useHistory } from "react-router-dom"

const ModalSave = ({ name, text, addNewNote }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const history = useHistory()

    const handleClick = () => {
        setShow(true)
        addNewNote()
        setTimeout(() => history.push(`/notes`), 1500)
    }

    return (
        <>
            <Button
                className={`${buttons.common} ${buttons.open}`}
                onClick={handleClick}
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
                </Modal.Header>

                <Modal.Body>
                    <p style={{ marginBottom: 30 }}>{text}</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalSave
