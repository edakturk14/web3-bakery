"use client"

import ShoppingCart from "@/components/layout/ShoppingCart";
import { useCart } from "@/components/Cart";

export default function MyCart() {
    const { cart } = useCart();

    return (
        <div className="max-w-3xl mx-auto p-8 mt-8">
            <ShoppingCart cartItems={cart} />
        </div>
    );
}
