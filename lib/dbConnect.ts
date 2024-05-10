import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

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
        } else {
            throw new Error('MongoDB connection failed');
        }
    } catch(error: any) {
        console.log(error);
        return NextResponse.json({message: error.message})
    }
}