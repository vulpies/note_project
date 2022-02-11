import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import NavBar from "../components/navbar/navBar"
import { AiOutlinePlusCircle } from "react-icons/ai"
import AllNotes from "../components/notes/allNotes"
import buttons from "../components/buttons/buttons.module.css"
import styles from "../components/notes/notes.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useHttp } from "../hooks/useHttp"
import { getNotes } from "../store/notesSlice"

const AllNotesPage = () => {
    const { users } = useSelector((state) => state.usersReducer)
    const notes = useSelector((state) => state.notesReducer.notes)
    const dispatch = useDispatch()
    const { request } = useHttp()

    let url = new URL("http://localhost:4000/api/notes/")
    url.searchParams.set("email", users.email)

    console.log(users.email, "users.email")
    console.log(users, "email")

    useEffect(() => {
        getNotesFromServer()
    }, [])

    console.log(url, "url")

    const getNotesFromServer = () => {
        request(url)
            .then((req) => dispatch(getNotes(req)))
            .catch((err) => console.log(err))
    }

    console.log(notes.length, "notes")
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
                    <>
                        <h2 className={styles.blindMsg}>
                            Сейчас у вас нет заметок
                        </h2>
                    </>
                )}
            </div>
        </>
    )
}

export default AllNotesPage
