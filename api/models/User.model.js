import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:  true,  //username should be unique for every user
    },
    email:{
        type: String,
        required: true,
        unique:  true,  //username should be unique for every user
    },
    password:{
        type: String,
        required: true,  
    }
} , {timestamps:true}); //user can have 2 time  stamps - createdAt and updatedAt

const User= mongoose.model('User', userSchema);
export default User;