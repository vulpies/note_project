import React, { useState } from "react"
import NavBar from "../../../menu/navbar/navBar"
import BackToMainPage from "../buttons/backToMainPage"
import buttons from "../buttons/buttons.module.css"
import ModalSave from "../modal/modalSave"
import styles from "./createNote.module.css"

const CreateNewNote = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [text, setText] = useState("")

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
        addNewNote()
    }

    const addNewNote = () => {
        if (title.trim() === "" || description.trim() === "") {
            setText("Заголовок и/или описание не может быть пустым")
            // setNewNotesArr(newNotesArr) возвращает текущий массив
        } else {
            const newNote = {
                _id: Date.now(),
                title: title.trim(),
                description: description.trim(),
            }

            console.log(newNote)
            setTitle("")
            setDescription("")
            setText("Новая заметка успешно создана")
        }
    }

    console.log(text)

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
