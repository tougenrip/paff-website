import mongoose from 'mongoose'
const serveruri = 'mongodb+srv://paffdb:paffdb@cluster0.bgv0qii.mongodb.net/?retryWrites=true&w=majority'

const connectDb = mongoose.createConnection(serveruri);

export default connectDb;