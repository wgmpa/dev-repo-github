import mongoose from "mongoose";

const repoSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
            unique:true
        },
        userId  :{
            type:String,
            unique:true
        }
    },
    {
        timestamps:true
    }
)

export default mongoose.model('repository',repoSchema )

