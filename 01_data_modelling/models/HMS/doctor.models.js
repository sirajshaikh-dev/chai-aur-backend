import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        salary:{
            type:Number,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        gender:{
            type:String,
            enum:['M','F','O'],
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        qualification:{
            type:String,
            required:true,
        },
        experienceInYears:{
            type:Number,
            required:true,
            default:0
        },
        worksInHospital:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Hospital'
            }
            
        ],
        specialization:{},
        patientsAssigned:{}
    },{timestamps:true}
)

export const Doctor = mongoose.model('Doctor',doctorSchema)