import express from 'express';
const app = express();
import 'dotenv/config';
import expressCron from 'express-cron';
import mongoose from 'mongoose';
import taskModel from './models/tasks.js';
import moment from 'moment';
const PORT = process.env.PORT || 8000;



const main = async () => {
    await mongoose.connect(process.env.MONGO_URL);
}

main().then(() => console.log('Db connected')).catch((err) => console.log(err));

app.use(express.json());

app.get('/' , async(req,res) => {
    try {
        const data = await taskModel.find();
        if (data){
            res.status(200).json({
                data,
                success:true
            })
        }

    } catch (error) {
        res.status(500).json({
            msg:"something went wrong",
            success:false
        })
    }
})

app.post('/' , async(req,res) => {
    try {

        const {task} = req.body;

        const time = moment().format("MMM Do YY"); 
        await taskModel.create({
            task,
            timeStamp: time 
        })
        
            res.status(201).json({
                data,
                success:true
            })
        

    } catch (error) {
        res.status(500).json({
            msg:"something went wrong",
            success:false
        })
    }
})

app.put('/:id' , async (req,res) => {

    try {

        const {id} = req.params;
    const {isDone} = req.body;



    const data = await taskModel.findByIdAndUpdate(id, {isDone}, {new: true});
    if (data) {
        res.status(200).json({
            data,
            success:true
        })
    }
        
    } catch (error) {
        res.status(500).json({
            msg:"something went wrong",
            success:false
        })
    }
    
})



app.listen(PORT , () => 
    console.log('server is running')
)