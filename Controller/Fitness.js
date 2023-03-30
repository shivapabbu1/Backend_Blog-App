const MongoClient=require('../database/connection')
const FitnessEnroll = async(req,res)=>{
    const fitnessData=req.body;
    try{
        const result = await MongoClient.insertToFitnessdb(fitnessData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getFitnessData=async (req,res)=>{
    const query={"category":"Fitness"};
    console.log(query);
    try{
        const result=await MongoClient.findFitnessInDb(query);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}
module.exports={
    FitnessEnroll,getFitnessData,
}