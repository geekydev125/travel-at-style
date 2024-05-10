import IProduct from "./Product";

export interface ISteamer extends IProduct {
    color: string,
    imgSpecial: string,
    packageIncludes: string[] | [],
}


