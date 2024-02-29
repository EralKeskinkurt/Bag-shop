interface Product {
    id:number;
    name:string;
    image: string;
    price: number;
}

interface Cart extends Product{
    count: number; 
}