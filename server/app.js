const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const routes = require("./routes")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use("/api", routes)

async function start() {
    try {
        await mongoose.connect(config.get("mongoUri"))

        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}`)
        })
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

start()
