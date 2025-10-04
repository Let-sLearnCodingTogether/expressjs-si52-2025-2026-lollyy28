import mongoose, { trusted } from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        displayName : {
            type : String,
            required : [true, "Profile picture wajib di isi"]
        },
        profilePicture : {
            type : String,
            required : [true, "Profile picture wajib di isi"]
        },
        bio : {
            type : String,
            minLeght : [10, "minimal 10 karakter"],
            maxleght : [150, "maximal 150 karakter"],
            required : [true, "Profile picture wajib di isi"],
            trim: true
        },
        user : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    }, {
        timestamps : true
    }
)

const ProfileModel = mongoose.Model("Profile", ProfileSchema)

export default ProfileModel