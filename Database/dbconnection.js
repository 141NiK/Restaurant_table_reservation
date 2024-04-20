import mongoose from "mongoose";

export const dbConnection = ()=>
{
    mongoose.connect(process.env.MONGO_URI,
        {
            dbName: "RESTAURANT"
        }).then(()=>
        {
            console.log("MongoDB Connected...");
        })
        .catch((err)=>{
            console.log("Error Connecting to MongoDB");
        });
} 