const express = require("express")
const router = express.Router()
const {getGig, allGig, deleteGig, createGig} = require("../controllers/gig.controller")
const verifyToken = require("../middleware/jwt")

router.get("/all",allGig)
router.get("/single/:id", getGig)
router.post("/create", verifyToken,createGig)
router.delete("delete/:id", verifyToken,deleteGig)

module.exports = router
