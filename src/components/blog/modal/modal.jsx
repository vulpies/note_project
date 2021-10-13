import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import { Button } from "react-bootstrap"
import buttons from "../buttons/buttons.module.css"
import CommonLinkBtn from "../buttons/commonLinkBtn"

const OpenModal = ({ text, name, onClick }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)

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
                        name="Закрыть"
                    />
                </Modal.Header>

                <Modal.Body>
                    <p>{text}</p>
                </Modal.Body>

                <Modal.Footer>
                    <CommonLinkBtn
                        className={`${buttons.common} ${buttons.remove}`}
                        onClick={onClick}
                        name="Да, удалить"
                    />
                    <CommonLinkBtn
                        className={`${buttons.common} ${buttons.open}`}
                        onClick={handleClose}
                        name="Нет, отменить"
                    />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default OpenModal
