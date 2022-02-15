import React, { useState } from "react"
import { useDispatch } from "react-redux"
import NavBar from "../../components/navbar/navBar"
import BackToMainPage from "../../components/buttons/backToMainPage"
import buttons from "../../components/buttons/buttons.module.css"
import ModalSave from "../../components/modal/modalSave"
import styles from "./createNote.module.css"
import { addNote } from "../../store/notesSlice"
import { useHistory } from "react-router-dom"
import { useHttp } from "../../hooks/useHttp"

const CreateNewNote = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { request } = useHttp()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [text, setText] = useState("")

    const addNewNote = () => {
        if (title.trim() === "" || description.trim() === "") {
            setText("Заголовок и/или описание не может быть пустым")
        } else {
            const payload = {
                email: localStorage.getItem("email"),
                title,
                description,
            }

            request(
                "http://localhost:4000/api/notes/",
                "POST",
                JSON.stringify(payload)
            )
                .then(dispatch(addNote(payload)))
                .catch((err) => console.log(err))

            history.push(`/notes`)
        }
    }

    return (
        <>
            <NavBar />
            <BackToMainPage />

            <div className={styles.create}>
                <h2 className={styles.title}>Создание новой заметки</h2>

                <div className={styles.texts}>
                    <p className={styles.subtitle}>Заголовок:</p>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>

                    <p className={styles.subtitle}>Описание:</p>

                    <textarea
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                        <pre></pre>
                    </textarea>
                </div>

                <div className={buttons.btns}>
                    <ModalSave
                        text={text}
                        name="Добавить"
                        addNewNote={addNewNote}
                    />
                </div>
            </div>
        </>
    )
}

export default CreateNewNote
