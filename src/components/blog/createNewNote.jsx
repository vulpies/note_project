import React, { useState } from "react"
import NavBar from "../../menu/navBar"
import BackToMainPage from "./buttons/backToMainPage"

const CreateNewNote = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const addNewNote = (e) => {
        e.preventDefault()
        if (title.trim() === "" || description.trim() === "") {
            alert("Заголовок и/или описание не может быть пустым")
            //setNewNotesArr(newNotesArr) возвращает текущий массив
        } else {
            const newNote = {
                _id: Date.now(),
                title: title.trim(),
                description: description.trim(),
            }

            console.log(newNote)
            alert("Новая заметка успешно создана")
            setTitle("")
            setDescription("")
        }
    }

    return (
        <>
            <NavBar />
            <BackToMainPage />

            <div className="create-note">
                <h2 className="create-note__title">Создание новой заметки</h2>

                <div className="create-note__texts">
                    <p className="create-note__texts-subtitle">Заголовок:</p>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>

                    <p className="create-note__texts-subtitle">Описание:</p>

                    <textarea
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                        <pre></pre>
                    </textarea>
                </div>

                <div className="notes__btn">
                    <button
                        className="notes__btn-common notes__btn-open"
                        onClick={(e) => addNewNote(e)}
                    >
                        Добавить
                    </button>
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
