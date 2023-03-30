const express=require('express')

const controller=require('../Controller/Food')
const router=express.Router()

router.post('/food',controller.FoodEnroll)
router.get('/food',controller.getFoodData)

module.exports=router;