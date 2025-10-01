import mongoose from "mongoose";

const UserSchena = new mongoose.Schema(
    {
        username : {
            type : String,
            required : [true, "user name wajib diisi"],
            unique : true,
            trim : true
        },
        email : {
            type : String,
            required : [true, "Email wajib di isi"],
            unique : true,
            trim : trusted,
        },
        password : {
            type : String,
            required : [true, "Password wajib di isi"]
        }
    },
    {
        timestamps : true
    }
)