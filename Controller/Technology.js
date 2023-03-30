const MongoClient=require('../database/connection')
const TechnologyEnroll = async(req,res)=>{
    const technologyData=req.body;
    try{
        const result = await MongoClient.insertToTechnologydb(technologyData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getTechnologyData=async (req,res)=>{
    const query={"category":"Technology"};
    console.log(query);
    try{
        const result=await MongoClient.findTechnologyInDb(query);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}
module.exports={
    TechnologyEnroll,getTechnologyData,
}