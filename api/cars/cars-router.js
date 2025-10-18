const express = require('express')
const Cars = require('./cars-model')

const {
checkCarId,
} = require ('./cars-middleware')
const router = express.Router()

router.get('/', async (req,res,next) => {
res.json ('getting all cars')
})

router.get('/:id',checkCarId, async (req,res,next) => {
 res.json (`getting car with id ${req.params.id}`)

})
router.post('/', async (req,res,next) => {
    res.json('posting new car')
})
module.exports = router