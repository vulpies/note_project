import React from "react"
import { Link } from "react-router-dom"
import CommonBtn from "../buttons/commonLinkBtn"
import buttons from "../buttons/buttons.module.css"
import OpenModal from "../modal/modalRemove"
import styles from "./notes.module.css"
import { useSelector } from "react-redux"

const AllNotes = () => {
    const notes = useSelector((state) => state.notesReducer.notes)
    return (
        <>
            {notes.map((note) => (
                <div
                    className={`${styles.singleBlock} col-xl-3 col-md-4 col-sm-6 col-12`}
                    key={note._id}
                >
                    <div className={styles.top}>
                        <h4 className={styles.title}>{note.title}</h4>

                        <p className={styles.subtitle}>{note.description}</p>
                    </div>

                    <div className={buttons.btns}>
                        <Link to={`/notes/${note._id}`}>
                            <CommonBtn
                                name="Открыть"
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
            ))}
        </>
    )
}

export default AllNotes
