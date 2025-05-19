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
        doctorAssigned:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Doctor',
        },
        medicalHistory:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'MedicalRecord'
            }
        ],
        admissionDate:{
            type:Date,
            required:true,
        },
        dischargeDate:{},
    },{timestamps:true}
)

export const Patient = mongoose.model('Patient',patientSchema)