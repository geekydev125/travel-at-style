export interface ProductVariant {
    img: string,
    price: number,
}

export interface Product {
    name: string,
    imgFolder: string,
    description: string,
    packageIncludes: string[] | [],
    variants: ProductVariant[],
}