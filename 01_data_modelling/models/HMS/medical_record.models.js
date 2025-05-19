import mongoose from 'mongoose'

const medicalRecordSchema = new mongoose.Schema(
    {
        patientId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Patient",
            required:true,
        },
        doctorId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required:true,
        },
        hospitalId:{
           type: mongoose.Schema.Types.ObjectId,
           ref:'Hospital',
           required:true,
        },
        diagnosis:{
        },
        treatment:{},
        prescription:{},
        testResults:[
            {
                testName:{
                    type:String,
                    required:true,
                },
                testResult:{
                    type:String,
                    required:true,
                },
                testDate:{
                    type:Date,
                    required:true,
                },
            }
        ],
        followUpDate:{
            type:Date,
        },
    },{timestamps:true}
)

export const MedicalRecord = mongoose.model('MedicalRecord',medicalRecordSchema)