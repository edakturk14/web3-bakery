// src/components/Cart.tsx
import { useState, useEffect } from "react";

interface MenuItem {
    _id: string;
    name: string;
    // add other properties as needed
}

interface CartItem extends MenuItem {
    quantity: number;
}

interface CartProps {
    menuItems: MenuItem[];
    onCartUpdate: (itemCount: number) => void;
}

export function useCart() {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: MenuItem) => {
        setCart(prevCart => {
            const itemInCart = prevCart.find(cartItem => cartItem._id === item._id);
            let updatedCart;
            if (itemInCart) {
                updatedCart = prevCart.map(cartItem =>
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                updatedCart = [...prevCart, { ...item, quantity: 1 }];
            }
            return updatedCart;
        });
        alert.message("Item added to cart");
    };

    const getCartItemCount = () => {
        const savedCart = localStorage.getItem("cart");
        const cart = savedCart ? JSON.parse(savedCart) : [];
        return cart.reduce((total: any, item: { quantity: any; }) => total + item.quantity, 0);
    };

    const cartItemCount = getCartItemCount();

    const bestSellerCartItems = cart.filter(item => ['1', '2', '3'].includes(item._id));

    return {
        cart,
        addToCart,
        cartItemCount,
        bestSellerCartItems,
        showNotification
    };
}


