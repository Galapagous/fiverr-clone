const express = require('express')
const router = express()
const verifyToken = require('../middleware/jwt')
const {singleReview, deleteReview, createReview, allReview} = require('../controllers/review.controller')

router.get('/:id', singleReview)
router.get('/', allReview)
router.post('/', verifyToken, createReview)
router.delete('/:id', verifyToken, deleteReview)

module.exports = router