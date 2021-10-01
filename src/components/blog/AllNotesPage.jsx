import React, { useState } from "react"
import { Link } from "react-router-dom"
import NavBar from "../../menu/navBar"
import { AiOutlinePlusCircle } from "react-icons/ai"
import AllNotes from "./AllNotes"
import notes from "../../fake_api/notes.api"

const AllNotesPage = () => {
    const [newNotesArr, setNewNotesArr] = useState(notes)

    const removeNote = (id) => {
        let filteredNotes = newNotesArr.filter((note) => note._id !== id)
        let deleteNoteQuestion = window.confirm(
            "Подтверждаете удаление заметки?"
        )
        if (deleteNoteQuestion) {
            setNewNotesArr(filteredNotes)
        }
    }

    let singleNote = newNotesArr
    if (newNotesArr.length) {
        singleNote = newNotesArr.map((note) => {
            return (
                <AllNotes
                    key={note._id}
                    /*id={note._id} передаем в функцию в NotesBtns */
                    onRemove={removeNote}
                    {...note}
                />
            )
        })
    } else {
        singleNote = <h2 className="blindMsg">Сейчас у вас нет заметок</h2>
    }

    return (
        <>
            <NavBar />
            <div className="btn-div">
                <Link
                    to="/createnote"
                    className="notes__btn-common notes__btn-add"
                >
                    {<AiOutlinePlusCircle />} Добавить заметку
                </Link>
            </div>

            <div className="row notes__main-block">{singleNote}</div>
        </>
    )
}

export default AllNotesPage
