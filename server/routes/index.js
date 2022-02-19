const express = require("express")
const router = express.Router({ mergeParams: true })

router.use("/auth", require("./auth_router"))
router.use("/notes", require("./notes_router"))
router.use("/users", require("./users_router"))

module.exports = router
