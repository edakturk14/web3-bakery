import { useRouter } from "next/navigation";
import React from "react";

interface CartProps {
    cartItems: CartItem[];
}

export default function ShoppingCart({ cartItems }: CartProps) {
    const router = useRouter();

    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleFinishAndPay = () => {
        router.push("/checkout");
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item._id} className="flex items-center justify-between my-2">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p className="text-blue-500">${item.price.toFixed(2)}</p>
                                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                                <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8">
                        <h3 className="text-xl font-bold">Total: ${totalCost.toFixed(2)}</h3>
                        <button
                            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-700 mt-4 w-full"
                            onClick={handleFinishAndPay}
                        >
                            Finish
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}