import { models, Schema, model } from "mongoose";
import IProduct from "./Product";

export interface IAccessory extends IProduct {
}

const AccessorySchema = new Schema({
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

export const Accessory = models.Accessory || model<IAccessory>('Accessory', AccessorySchema)