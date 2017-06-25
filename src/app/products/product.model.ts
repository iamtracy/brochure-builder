export class Product {

    constructor(
        public city: string, 
        public productName: string, 
        public website?: string, 
        public logo?: string, 
        public categories?: Array<any>
    ) {}

}