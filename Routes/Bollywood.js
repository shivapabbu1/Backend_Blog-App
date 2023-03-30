const express=require('express')

const controller=require('../Controller/Bollywood')
const router=express.Router()
router.post('/bollywood',controller.BollywoodEnroll)
router.get('/bollywood',controller.getBollywoodData)

module.exports=router;