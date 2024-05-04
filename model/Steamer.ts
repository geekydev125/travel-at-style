import Product from "./Product";

export default interface Steamer extends Product {
    color: string,
    imgSpecial: string,
    packageIncludes: string[] | [],
}