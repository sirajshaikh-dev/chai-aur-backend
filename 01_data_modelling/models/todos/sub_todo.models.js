
import mongoose from 'mongoose'

export const subTodoSchema = new mongoose.schema(
    {
        contents:{
            type: String,
            required: true
        },
        complete:{
            type: Boolean,
            default:false
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    },{timestamps:true}
)

export const SubTodo= mongoose.model('SubTodo',subTodoSchema)