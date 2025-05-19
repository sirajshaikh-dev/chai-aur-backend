import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        addressLine1:{
            type:String,
            required:true,
        },
        addressLine2:{
            type:String,
        },
        city:{
            type:String,
            required:true,
        },
        pincode:{
            type:String,
            required:true,
        },
        specializedIn:[
            {
                type:String,
                required:true,
            }
        ],
        phone:{},
        email:{},
        establishedYear:{},
        numberOfBeds:{},
        numberOfDoctors:{},
        numberOfPatients:{},
        departments:{},
        emergencyServices:{},
    },{timestamps:true}
)

export const Hospital = mongoose.model('Hospital',hospitalSchema)