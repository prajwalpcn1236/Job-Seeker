import mongoose from "mongoose";
import  Users  from "../models/userModel.js";
export const updateUser= async (req,res,next)=>{
  const {
    firstname,
    lastname,
    email,
    contact,
    location,
    profileUrl,
    jobTitle,
    about
  }=req.body;

    try {
      if(!firstname ||!lastname||!email||!contact||!location||!profileUrl||!jobTitle||!about){
        next("Please provide all required fields")
      }
      const id=req.body.user.userId;

      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No user with id:${id}`);
      }


      const updateUser={
        firstname,
        lastname,
        email,
        contact,
        location,
        profileUrl,
        jobTitle,
        about,
        _id:id
      };
      const user=await Users.findByIdAndUpdate(id,updateUser,{new:true});
      const token=user.createJWT();
    //  user.password=undefined;
      res.status(200).json({
        success:true,
        message:"User updated successfully",
        user,
        token
      })

    } catch (error) {
      console.log(error);
      res.status(404).json({message:error.message})
    }

}
export const getUser= async (req,res,next)=>{
try {
  const id=req.body.user.userId;
  const user= await Users.findById({_id:id});
  if(!user){
    res.status(401).send({message:"User not found",
    success:false,});
  }
  user.password=undefined; 
  res.status(200).send({
    success:true,
    user:user
  });
} catch (error) {
  console.log(error);
  res.status(500).send({
    message:"auth error",
    success:false,
    error:error.message
  })
}
}