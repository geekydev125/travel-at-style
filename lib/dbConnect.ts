import mongoose from 'mongoose';

let isConnected = false;

export const dbConnect = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: process.env.MONGODB_DB as string
        })
        
        if (db.connection.readyState) {
            isConnected = true;
            console.log('MongoDB is connected');
        }
    } catch(error) {
        console.log(error);
    }
}