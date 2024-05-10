import IProduct from "./Product";
import { Schema, model, models } from 'mongoose';

export interface ISteamer extends IProduct {
    color: string,
    imgSpecial: string,
    packageIncludes: string[] | [],
}


const SteamerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    nameCamelCase: {
        type: String,
        required: true
    },
    imgFolder: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    imgSpecial: {
        type: String,
        match: /^[a-zA-Z0-9_-]+\.(?:jpg|jpeg|png|gif|bmp)$/,
        required: true
    },
    packageIncludes: {
        type: [String],
        required: true
    }
});

export const Steamer = models.Steamer || model<ISteamer>('Steamer', SteamerSchema);