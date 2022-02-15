import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import { Button } from "react-bootstrap"
import buttons from "../buttons/buttons.module.css"
import CommonLinkBtn from "../buttons/commonLinkBtn"

const ModalSave = ({ name, text, addNewNote }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)

    const handleClick = () => {
        setShow(true)
        addNewNote()
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
                    <p style={{ marginBottom: 30, textAlign: "center" }}>
                        {text}
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <CommonLinkBtn
                        className={`${buttons.common} ${buttons.open}`}
                        onClick={() => setShow(false)}
                        name="Закрыть"
                    />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalSave
