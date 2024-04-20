import { IdType, Identifiable } from "@/types/common-types";

export type ProductCategory = "steamer" | "luggage" | "accessory";

export interface Product extends Identifiable<IdType>{
    name: string,
    productCategory: ProductCategory,
    nameCamelCase: string,
    imgFolder: string,
    img: string,
    description: string,
    price: number
}