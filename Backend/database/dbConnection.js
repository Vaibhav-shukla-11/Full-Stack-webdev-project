import mongoose, { connect } from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName : "MINOR_PROJECT_2" 
        
    }).then( ()=>{
          console.log("Connected to database!")

    }).catch((err)=>{
        console.log(`Some error occured while connecting to database: ${err} `);
    })
}