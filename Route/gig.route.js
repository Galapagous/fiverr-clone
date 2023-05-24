const express = require("express")
const router = express.Router()
const {getGig, allGig, deleteGig, createGig} = require("../controllers/gig.controller")
const verifyToken = require("../middleware/jwt")

router.get("/", verifyToken,allGig)
router.get("/single/:id", verifyToken,getGig)
router.post("/create", verifyToken,createGig)
router.delete("/:id", verifyToken,deleteGig)

module.exports = router
