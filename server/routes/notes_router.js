const express = require("express")
const router = express.Router({ mergeParams: true })
const Note = require("../models/Note")
const User = require("../models/User")
const authMiddleware = require("../middleware/auth_middleware")
const querystring = require("querystring")

//Create post
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { email, title, description } = req.body
        const newNote = await Note.create({ email, title, description })

        const user = await User.findOne({ email }).populate("notes")
        user.notes.push(newNote._id)
        await user.save()

        res.send(newNote)
    } catch (error) {
        res.status(500).json({ message: "Ошибка на сервере" })
    }
})

// Update post
router.put("/:noteId", authMiddleware, async (req, res) => {
    const { noteId } = req.params
    try {
        const updNote = await Note.findByIdAndUpdate(
            noteId,
            { $set: req.body },
            { new: true }
        )
        res.send(updNote)
    } catch (error) {
        return res.status(500).json({ message: "Ошибка на сервере" })
    }
})

// Delete post
router.delete("/:noteId/", authMiddleware, async (req, res) => {
    const { noteId } = req.params
    const searchParams = req.url
    const decodedStr = decodeURIComponent(searchParams)
    const newgv = decodedStr.slice(27)
    const { email } = querystring.decode(newgv)
    try {
        const user = await User.findOne({ email }).populate("notes")
        user.notes.remove(noteId)
        await user.save()

        const note = await Note.findById(noteId)
        await note.remove()

        return res.json({ message: "Заметка успешно удалена!" })
    } catch (error) {
        return res.status(500).json({ message: "Ошибка на сервере" })
    }
})

// Get post
router.get("/:noteId", authMiddleware, async (req, res) => {
    const { noteId } = req.params
    try {
        const note = await Note.findById(noteId)
        res.send(note)
    } catch (error) {
        res.status(500).json({ message: "Ошибка на сервере" })
    }
})

// Get all posts
router.get("/", authMiddleware, async (req, res) => {
    const searchParams = req.url
    const decodedStr = decodeURIComponent(searchParams)
    const newgv = decodedStr.slice(2)
    const { email } = querystring.decode(newgv)

    try {
        if (email) {
            const notes = await Note.find({ email })
            res.send(notes)
        }
    } catch (error) {
        return res.status(400).json({
            message: "Ошибка в получении заметок",
        })
    }
})

module.exports = router
