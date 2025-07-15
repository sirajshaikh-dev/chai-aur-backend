import mongoose, { Schema, schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //cloudinary url
      required: true,
    },
    coverImage: {
      type: String, //cloudinary url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre('save',function(){
  if (!this.isModified('password')) return next()
  this.password= bcrypt.hash(this.password,10)
  next()  
})

userSchema.methods.isPasswordCorrect=async function (password) {
  return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken= function(){ //can add async if takes time, usually it dont takes much time
  return jwt.sign(
    {
      _id:this._id,
      email:this.email,
      username:this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

userSchema.methods.generateRefreshToken= function(){
  return jwt.sign(
    {
      _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User", userSchema);
