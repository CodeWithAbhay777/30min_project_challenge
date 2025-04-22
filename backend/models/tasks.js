import mongoose, { mongo } from "mongoose";

const taskSchema = mongoose.Schema({
    task:{
        type:String,
        required: true
    },
    isDone: {
        type: Boolean,
        default : false
    },
    timeStamp:{
        type:String

    }
})

const taskModel = mongoose.model("tasModel" , taskSchema);

export default taskModel;
