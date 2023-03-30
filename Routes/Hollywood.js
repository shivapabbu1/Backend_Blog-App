const express=require('express')
 const controller=require('../Controller/Hollywood')
const router=express.Router()

router.post('/hollywood',controller.HollywoodEnroll);
router.get('/hollywood',controller.getHollywoodData);


module.exports=router;