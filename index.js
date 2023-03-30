const express=require('express')

const bollyrouter=require('./Routes/Bollywood')
const hollyrouter=require('./Routes/Hollywood')
const techroute=require('./Routes/Technology')
const fitnessrouter=require('./Routes/Fitness')
const foodrouter=require('./Routes/Food')
const homerouter=require('./Routes/Home')
 const bodyparser=require('body-parser')

const app=express()

app.use(bodyparser.json());

app.use(homerouter)
app.use(bollyrouter)
app.use(hollyrouter)
app.use(techroute)
app.use(fitnessrouter)
app.use(foodrouter)

app.listen(7001, ()=>{
    console.log("server is running on 7001");
  
})