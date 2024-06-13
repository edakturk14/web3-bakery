interface MenuItem {
    _id: string;
    image: string;
    name: string;
    description: string;
    price: number;
}

interface CartItem extends MenuItem {
    quantity: number;
}