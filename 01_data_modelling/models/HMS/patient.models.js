import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true,
        },
        gender:{
            type:String,
            enum:['M','F','O'],
            required:true,
        },
        phone:{
            type:Number,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        
        diagnoisedWith:{
            type:String,
            required:true,
        },
        bloodgroup:{
            type:String,
        },
        admittedIn:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Hospital'
        },
        admissionDate:{},
        dischargeDate:{},
        doctorAssigned:{},
    },{timestamps:true}
)

export const Patient = mongoose.model('Patient',patientSchema)