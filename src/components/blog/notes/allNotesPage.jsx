import React from "react"
import { Link } from "react-router-dom"
import NavBar from "../../../menu/navbar/navBar"
import { AiOutlinePlusCircle } from "react-icons/ai"
import AllNotes from "./allNotes"
import buttons from "../buttons/buttons.module.css"
import styles from "./notes.module.css"
import { useSelector } from "react-redux"

const AllNotesPage = () => {
    const notes = useSelector((state) => state.notesReducer.notes)

    return (
        <>
            <NavBar />
            <div className={buttons.wrapper}>
                <Link
                    to="/createnote"
                    className={`${buttons.common} ${buttons.add}`}
                >
                    {<AiOutlinePlusCircle />} Добавить заметку
                </Link>
            </div>

            <div className={`row ${styles.mainBlock}`}>
                {notes.length ? (
                    <AllNotes />
                ) : (
                    <h2 className={styles.blindMsg}>
                        Сейчас у вас нет заметок
                    </h2>
                )}
            </div>
        </>
    )
}

export default AllNotesPage
