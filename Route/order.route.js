const express = require('express')
const router = express()
const verifyToken = require('../middleware/jwt')
const {singleOrder, deleteOrder, createOrder, allOrder} = require('../controllers/order.controller')

router.get('/:id',verifyToken, singleOrder)
router.get('/all',verifyToken, allOrder)
router.post('/', verifyToken, createOrder)
router.delete('/:id', verifyToken, deleteOrder)

module.exports = router