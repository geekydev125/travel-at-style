export interface SteamerVariant {
    color: string,
    img: string,
    imgShop: string
}

export class Steamer {
    constructor(
        public name: string,
        public imgFolder: string,
        public description: string,
        public packageIncludes: string[],
        public variants: SteamerVariant[],
        public price: number
    ) { }
}