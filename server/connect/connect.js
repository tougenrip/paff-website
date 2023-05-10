import mongoose from 'mongoose'
const serveruri = 'mongodb+srv://paffdb:paffdb@cluster0.bgv0qii.mongodb.net/?retryWrites=true&w=majority'
// To connect with your mongoDB database
mongoose.connect(serveruri, {
    dbName: 'PaffDAO',
    useNewUrlParser: true,
    useUnifiedTopology: true
});
 
// Schema for users of app
const ProposalSchema = new mongoose.Schema({
    id:{type:Number, ref:'docID'},
    title:String,
    proposer:String,
    body:String,
    date:{type:Date, default:Date.now},
    hidden:Boolean,
    meta:{
        ups:Number,
        downs:Number
    }
});
const Proposal = mongoose.model('proposals', ProposalSchema);
Proposal.createIndexes();
 
// For backend and express
import express from 'express';
const app = express();
import cors from 'cors';
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // You can check backend is working or not by
    // entering http://localhost:5000
     
    // If you see App is working means
    // backend working properly
});

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
        res.send(req.body);
    } catch(err) {
        console.log(err)
    }
    });

app.get('/proposals', async (req, res) => {
        const query = Proposal.find({});
        res.json(query)


})

app.listen(5000);