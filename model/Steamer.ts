export class Steamer {
    constructor(
        public name: number,
        public description: string,
        public packageIncludes: string[],
        public variants: {}[],
        public price: number
    ) { }
}