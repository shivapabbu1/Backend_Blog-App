const express=require('express')

const controller=require('../Controller/Technology')

const router=express.Router()

router.post('/technology',controller.TechnologyEnroll)
router.get('/technology',controller.getTechnologyData)

module.exports=router;