const express = require("express")
const router = express.Router()
const {deleteUser, allUser, singleUser} = require("../controllers/user.controller")
const verifyToken = require("../middleware/jwt")

router.post("/delete/:id", verifyToken, deleteUser)
router.get("/all", allUser)
router.get("/single/:id", singleUser)

module.exports = router
