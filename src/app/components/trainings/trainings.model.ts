export class Training {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity : number;
    image : string;
    category : string;

    constructor(id: string, name: string, description: string, price: number, quantity : number, image: string, category : string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
        this.category =category;
    }
};
