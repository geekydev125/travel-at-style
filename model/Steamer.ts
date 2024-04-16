import { Product, ProductVariant } from "./Product";

export interface SteamerVariant extends ProductVariant {
    color: string,
    imgSpecial: string,
}

export interface Steamer extends Omit<Product, 'variants'> {
    variants: SteamerVariant[]
}