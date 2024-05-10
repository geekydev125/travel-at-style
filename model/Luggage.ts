import { models, Schema, model } from "mongoose";

import IProduct from "./Product";

export interface ILuggage extends IProduct {
}

const LuggageSchema = new Schema({
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
})

export const Luggage = models.Luggage || model<ILuggage>('Luggage', LuggageSchema)