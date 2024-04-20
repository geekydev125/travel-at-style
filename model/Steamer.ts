import { Product } from "./Product";

export interface Steamer extends Product {
    productCategory:'steamer',
    color: string,
    imgSpecial: string,
    packageIncludes: string[] | [],
}