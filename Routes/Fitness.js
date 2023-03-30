const express=require('express')
const controller=require('../Controller/Fitness')
const router=express.Router()

router.post('/fitness',controller.FitnessEnroll)
router.get('/fitness',controller.getFitnessData)
module.exports=router;