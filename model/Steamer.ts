export class Steamer {
    constructor(
        public name: string,
        public imgFolder: string,
        public description: string,
        public packageIncludes: string[],
        public variants: {
            color: string,
            img: string
        }[],
        public price: number
    ) { }
}