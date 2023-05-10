import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import Proposal from '../schema/daoschema.js';
import aI from 'mongoose-auto-increment';
import connectDb from '../connect/connect.js';

aI.initialize(connectDb);

daoSchema.plugin(aI.plugin, 'docID');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://paffdb:paffdb@cluster0.bgv0qii.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

app.post('/insert', async(req, res) => {
    const Title = req.body.title
    const Proposer = req.body.proposer
    const messageBody = req.body.body
    
    const formData = new Proposal({
        title: Title,
        proposer: Proposer,
        body:messageBody,
    })
    
    try {
        await formData.save();
        res.send("inserted data..")
    } catch(err) {
        console.log(err)
    }
    });
app.get


    const port = process.env.PORT || 5000;

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });