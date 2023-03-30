const MongoClient=require('../database/connection')
const HollywoodEnroll = async(req,res)=>{
    const hollywoodData=req.body;
    try{
        const result = await MongoClient.insertToHollywooddb(hollywoodData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getHollywoodData=async (req,res)=>{
    const query={"category" : "Hollywood"};
    console.log(query);
    try{
        const result=await MongoClient.findHollywoodInDb(query);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}
module.exports={
    HollywoodEnroll,getHollywoodData,
}