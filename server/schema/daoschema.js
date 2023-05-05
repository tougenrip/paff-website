import mongoose from 'mongoose';
import connectDb from '../connect/connect.js';
import aI from 'mongoose-auto-increment';
const { Schema, model } = mongoose;

export const daoSchema = new Schema({
    _id:{type:Number, ref:'docID'},
    title:String,
    proposer:String,
    body:String,
    proposalComms:[{ body:String, date: Date }],
    date:{type:Date, default:Date.now},
    hidden:Boolean,
    meta:{
        ups:Number,
        downs:Number
    }
})

aI.initialize(connectDb);

const Proposal = connectDb.model('Dao', daoSchema);
// const daoDoc = new Proposal();
daoSchema.plugin(aI.plugin, 'docID');
// await daoDoc.save();