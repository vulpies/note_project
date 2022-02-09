import React from "react"
import { Link } from "react-router-dom"
import NavBar from "../components/navbar/navBar"
import { AiOutlinePlusCircle } from "react-icons/ai"
import AllNotes from "../components/notes/allNotes"
import buttons from "../components/buttons/buttons.module.css"
import styles from "../components/notes/notes.module.css"
import { useSelector } from "react-redux"
import localStorageService from "../services/localStorage.service"
import { useHttp } from "../hooks/useHttp"

const AllNotesPage = () => {
    const notes = useSelector((state) => state.notesReducer.notes)
    const { request } = useHttp()
    const token = localStorageService.getAccessToken()

    const handleSend = async () => {
        console.log(11111)
        try {
            const data = await request(
                "http://localhost:4000/api/notes/",
                "POST",
                { title: "vernve", description: "vurnvmkce" },
                {
                    Authorization: `Bearer: ${token}`,
                }
            )
            console.log(data, "data")
        } catch (error) {
            console.log(error, "error")
        }
    }

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

                        <button onClick={handleSend}>Send</button>
                    </>
                )}
            </div>
        </>
    )
}

export default AllNotesPage
