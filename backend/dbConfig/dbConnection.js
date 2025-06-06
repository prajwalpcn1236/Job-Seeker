import mongoose from "mongoose";

const dbConnection =async ()=> {
    try {
        const dbConnection =await mongoose.connect(process.env.MONGODB_URL);
         console.log("Database Connected Successfully");
    } catch (error) {
        console.log("DataBase Error :" +error);
    }
};

export default dbConnection;