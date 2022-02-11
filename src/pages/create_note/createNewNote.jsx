import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import NavBar from "../../components/navbar/navBar"
import BackToMainPage from "../../components/buttons/backToMainPage"
import buttons from "../../components/buttons/buttons.module.css"
import ModalSave from "../../components/modal/modalSave"
import styles from "./createNote.module.css"
import { addNote } from "../../store/notesSlice"
import { useHistory } from "react-router-dom"
import { useHttp } from "../../hooks/useHttp"

const CreateNewNote = () => {
    const { users } = useSelector((state) => state.usersReducer)
    const dispatch = useDispatch()
    const history = useHistory()
    const { request } = useHttp()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [text, setText] = useState("")

    const addNewNote = async () => {
        if (title.trim() === "" || description.trim() === "") {
            setText("Заголовок и/или описание не может быть пустым")
            console.log("first")
        } else {
            const payload = {
                // front_note_id: Date.now(),
                email: users.email,
                title,
                description,
            }

            request(
                "http://localhost:4000/api/note/",
                "POST",
                JSON.stringify(payload)
            )
                .then((res) => console.log(res, "Заметка успешно создана!"))
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

/* await fetch('/createnote', {body: newNote})

            server.post('/createnote', (req, res)=>{
            const newNote = req.params.body
                const id = ObjectId()
                await db.notes.insertOne({_id: id, newNote})  //MongoDB
            })

            const notes = await fetch('/getnotes')

            server.get('/getnotes', (req, res)=>{
                const notes =  await db.notes.find()  //MongoDB
                return notes
            })

            const [notes, setNotes] = useState([])

            setNotes(notes) */
