const express = require("express")
const router = express.Router()
const { login, logout, register } = require("../controllers/auth.controller")

router.get("/login", login)
router.get("/logout", logout)
router.post("/register", register)

module.exports = router
