const MongoClient = require("../database/connection")

const HomeEnroll = async(req,res)=>{
    const homeData=req.body;
    try{
        const result = await MongoClient.insertToHomedb(homeData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getHomeData=async (req,res)=>{
        const query=req.query
        console.log(query);
        try{
            const result=await MongoClient.findHomeInDb(query);
            console.log("the result of database operation =>",result);
            return res.status(200).send(result);
        }
        catch(error){
            console.log("Something went wrong while performing db operation");
            return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
        }
}

// const BollywoodEnroll= async(req,res)=>{
//     const bollywoodData=req.body;
//     try{
//         const result = await MongoClient.insertToBollywooddb(bollywoodData);
//         console.log("The result of database operation =>",result);
//         return res.status(200).send(result);
//     }
//     catch(error){
//         console.log("something went wrong while performing db operation");
//         return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
//     }
// }

// const getBollywoodData=async (req,res)=>{
//     const query={"category":"bollywood"};
//     console.log(query);
//     try{
//         const result=await MongoClient.findBollywoodInDb(query);
//         console.log("the result of database operation =>",result);
//         return res.status(200).send(result);
//     }
//     catch(error){
//         console.log("Something went wrong while performing db operation");
//         return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
//     }
// }
// const HollywoodEnroll = async(req,res)=>{
//     const hollywoodData=req.body;
//     try{
//         const result = await MongoClient.insertToHollywooddb(hollywoodData);
//         console.log("The result of database operation =>",result);
//         return res.status(200).send(result);
//     }
//     catch(error){
//         console.log("something went wrong while performing db operation");
//         return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
//     }
// }

// const getHollywoodData=async (req,res)=>{
//     const query=req.query;
//     console.log(query);
//     try{
//         const result=await MongoClient.findHollywoodInDb(query);
//         console.log("the result of database operation =>",result);
//         return res.status(200).send(result);
//     }
//     catch(error){
//         console.log("Something went wrong while performing db operation");
//         return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
//     }
// }


//  const TechnologyEnroll = async(req,res)=>{
//         const technologyData=req.body;
//         try{
//             const result = await MongoClient.insertToTechnologydb(technologyData);
//             console.log("The result of database operation =>",result);
//             return res.status(200).send(result);
//         }
//         catch(error){
//             console.log("something went wrong while performing db operation");
//             return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
//         }
//     }
    
//     const getTechnologyData=async (req,res)=>{
//         const query=req.query;
//         console.log(query);
//         try{
//             const result=await mongoClient.findTechnologyInDb(query);
//             console.log("the result of database operation =>",result);
//             return res.status(200).send(result);
//         }
//         catch(error){
//             console.log("Something went wrong while performing db operation");
//             return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
//         }
//     }
    // const FitnessEnroll = async(req,res)=>{
    //         const fitnessData=req.body;
    //         try{
    //             const result = await MongoClient.insertToFitnessdb(fitnessData);
    //             console.log("The result of database operation =>",result);
    //             return res.status(200).send(result);
    //         }
    //         catch(error){
    //             console.log("something went wrong while performing db operation");
    //             return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    //         }
    //     }
        
    //     const getFitnessData=async (req,res)=>{
    //         const query={"category":"Fitness"};
    //         console.log(query);
    //         try{
    //             const result=await mongoClient.findFitnessInDb(query);
    //             console.log("the result of database operation =>",result);
    //             return res.status(200).send(result);
    //         }
    //         catch(error){
    //             console.log("Something went wrong while performing db operation");
    //             return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    //         }
    //     }



       
// const FoodEnroll = async(req,res)=>{
//     const foodData=req.body;
//     try{
//         const result = await MongoClient.insertToFooddb(foodData);
//         console.log("The result of database operation =>",result);
//         return res.status(200).send(result);
//     }
//     catch(error){
//         console.log("something went wrong while performing db operation");
//         return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
//     }
// }

// const getFoodData=async (req,res)=>{
//     const query=req.query;
//     console.log(query);
//     try{
//         const result=await MongoClient.findFoodInDb(query);
//         console.log("the result of database operation =>",result);
//         return res.status(200).send(result);
//     }
//     catch(error){
//         console.log("Something went wrong while performing db operation");
//         return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
//     }
// }
module.exports=
{
    HomeEnroll,getHomeData,
    
  
    
}