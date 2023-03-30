const MongoClient=require('../database/connection')
const FoodEnroll = async(req,res)=>{
    const foodData=req.body;
    try{
        const result = await MongoClient.insertToFooddb(foodData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getFoodData=async (req,res)=>{
    const query={"category":"Food"};
    console.log(query);
    try{
        const result=await MongoClient.findFoodInDb(query);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}
module.exports={
    FoodEnroll,getFoodData,
}