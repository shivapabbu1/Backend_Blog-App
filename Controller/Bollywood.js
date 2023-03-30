const MongoClient=require('../database/connection')

const BollywoodEnroll= async(req,res)=>{
    const bollywoodData=req.body;
    try{
        const result = await MongoClient.insertToBollywooddb(bollywoodData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getBollywoodData=async (req,res)=>{
    const query={"category":"bollywood"};
    console.log(query);
    try{
        const result=await MongoClient.findBollywoodInDb(query);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}
module.exports={
    BollywoodEnroll,getBollywoodData
}