import React from "react"
import { Link } from "react-router-dom"
import CommonBtn from "../buttons/commonLinkBtn"
import buttons from "../buttons/buttons.module.css"
import OpenModal from "../modal/modalRemove"
import styles from "./notes.module.css"

const AllNotes = ({ onRemove, _id, title, description }) => {
    return (
        <div
            className={`${styles.singleBlock} col-xl-3 col-md-4 col-sm-6 col-12`}
        >
            <div className={styles.top}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.subtitle}>{description}</p>
            </div>

            <div className={buttons.btns}>
                <Link to={`/notes/${_id}`}>
                    <CommonBtn
                        name="Открыть"
                        className={`${buttons.common} ${buttons.open}`}
                    />
                </Link>
                <OpenModal
                    name="Удалить"
                    text="Подтверждаете удаление заметки?"
                    onClick={() => onRemove(_id)}
                />
            </div>
        </div>
    )
}

export default AllNotes
