const express=require('express')
 const controller=require('../Controller/Home')
const router=express.Router()

router.post('/home',controller.HomeEnroll);
router.get('/home',controller.getHomeData);

// router.post('/bollywood',controller.BollywoodEnroll);
// router.get('/bollywood',controller.getBollywoodData);

// router.post('/hollywood',controller.HollywoodEnroll);
// router.get('/hollywood',controller.getHollywoodData);

// router.post('/technology',controller.TechnologyEnroll)
// router.get('/technology',controller.getTechnologyData)

// router.post('/fitness',controller.FitnessEnroll)
// router.get('/fitness',controller.getFitnessData)
// router.post('/food',controller.FoodEnroll)
// router.get('/food',controller.getFoodData)

module.exports=router;
