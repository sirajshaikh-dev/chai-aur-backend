import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItem: {
      type: [orderItemSchema], //array coz multiple items honge
      /*OR*/
      // type:[{
      //      productId:{
      //        type:mongoose.Schema.Types.ObjectId,
      //        ref:"Product"
      //      },
      //      quantity:{
      //        type:Number,
      //        required:true,
      //      },
      // }],

      ref: [],
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum: ['PENDING','CANCELLED','DELIVERED'],
        default:"PENDING"
    }
  },
  { timestamps: true }
);
