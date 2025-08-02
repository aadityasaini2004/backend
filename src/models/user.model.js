import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema({
    userName: {
        type: String,
        requried: true,
        maxLength: [6, "User Name is bigger than 6 character"],
        minLength: [3, "User Name is smaller than 3 character"],
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },

    avatar: {
       type: String,
       required: true, 
    },
    
    coverImage: {
        requied: true,
    },

    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    
    password: {
        type: String,
        required: [true, "Passowrd is required"]
    },

    refreshToken: {
        type: String,
    },


},{timestamps: true});


// password encryption middleware
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})

export const User = mongoose.model("User", userSchema)