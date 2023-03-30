const {MongoClient}=require('mongodb')

// const url="mongodb://127.0.0.1:27017"
 const url ="mongodb+srv://shiva_pabbu1:99999@cluster0.aaitgpp.mongodb.net/MyBlogDB?retryWrites=true&w=majority"
const client=new MongoClient(url);

const insertToHomedb= async (data)=>{
    try {
        console.log("first log");
        const database = client.db("MyBlogDB"); 
        const collection = database.collection("home")
        const connobj=await client.connect();
        console.log("my db is connected ",connobj);
        const dbResponse=await collection.insertMany(data) 
        await client.close();
        console.log("my dbresponse is here",dbResponse); 
        return dbResponse;
    } catch (error) {
        console.log("here is my errrs",error);
        return error.message;
        
    }
}

const insertToBollywooddb= async (data)=>{
    try {
        const database = client.db("MyBlogDB"); 
        const collection = database.collection("Bollywood")
    await client.connect()
        const dbResponse=await collection.insertMany(data) 
        await client.close(); 
        return dbResponse;
        
    } catch (error) {
        return error.messgae;
        
    }
}
const insertToHollywooddb= async (data)=>{
    try {
        const database = client.db("MyBlogDB"); 
        const collection = database.collection("Hollywood")
        await client.connect(

        );
        const dbResponse=await collection.insertMany(data) 
        await client.close(); 
        return dbResponse;
        
    } catch (error) {
        return error.messgae;
        
    }
}

const insertToTechnologydb= async (data)=>{
    try {
        const database = client.db("MyBlogDB"); 
        const collection = database.collection("Technology")
        await client.connect();
        const dbResponse=await collection.insertMany(data) 
        await client.close(); 
        return dbResponse;
        
    } catch (error) {
        return error.messgae;
        
    }
}
const insertToFitnessdb= async (data)=>{
    try {
        const database = client.db("MyBlogDB"); 
        const collection = database.collection("Fitness")
        await client.connect();
        const dbResponse=await collection.insertMany(data) 
        await client.close(); 
        return dbResponse;
    } catch (error) {
        return error.messgae;
        
    }
}
const insertToFooddb= async (data)=>{
    try {
        const database = client.db("MyBlogDB"); 
        const collection = database.collection("Food")
        await client.connect();
        const dbResponse=await collection.insertMany(data) 
        await client.close(); 
        return dbResponse;
    } catch (error) {
        return error.messgae;
        
    }
}

const findHomeInDb=async(query)=>{
    try{
        const database=client.db("MyBlogDB");
        const collection=database.collection("home");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}
const findBollywoodInDb=async(query)=>{
    try{
        const database=client.db("MyBlogDB");
        const collection=database.collection("Bollywood");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}
const findHollywoodInDb=async(query)=>{
    try{
        const database=client.db("MyBlogDB");
        const collection=database.collection("Hollywood");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}
const findTechnologyInDb=async(query)=>{
    try{
        const database=client.db("MyBlogDB");
        const collection=database.collection("Technology");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}
const findFitnessInDb=async(query)=>{
    try{
        const database=client.db("MyBlogDB");
        const collection=database.collection("Fitness");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}
const findFoodInDb=async(query)=>{
    try{
        const database=client.db("MyBlogDB");
        const collection=database.collection("Food");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}
module.exports={
    // insertToHomedb,findHomeInDb,insertToBollywooddb,findBollywoodInDb,
    insertToHomedb,insertToBollywooddb,insertToHollywooddb,insertToTechnologydb,insertToFitnessdb,insertToFooddb,
    findBollywoodInDb,findHomeInDb,findHollywoodInDb,findTechnologyInDb,findFitnessInDb,findFoodInDb,
}