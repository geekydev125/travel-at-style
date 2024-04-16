import { Product } from "./Product";

export interface Steamer extends Product {
    color: string,
    imgSpecial: string,
    packageIncludes: string[] | [],
}