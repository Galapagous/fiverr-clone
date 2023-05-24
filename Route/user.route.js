const express = require("express")
const router = express.Router()
const {deleteUser, allUser} = require("../controllers/user.controller")
const verifyToken = require("../middleware/jwt")

router.post("/delete/:id", verifyToken, deleteUser)
router.get("/all", allUser)

module.exports = router
