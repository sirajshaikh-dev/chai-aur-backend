import mongoose from 'mongoose'

const todoSchema = new mongoose.schema(
    {
        content:{
            type: String,
            required: true,
        },
        complete:{
            type: Boolean,
            default:false
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"         //revision
        },
        subTodos:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            },
        ]
    },
    {timestamps:true}
)

const Todo= mongoose.model('Todo',todoSchema) // Todo will stored as todos in db