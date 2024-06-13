'use client'

import MenuItem from "@/components/layout/Menu";
import menuItems from "../../menuItems";
import { useCart } from "@/components/Cart";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Menu() {
    const { addToCart } = useCart();

    return (
        <div className="max-w-3xl mx-auto p-8 mt-8">
            <div className="text-center m-4">
                <SectionHeaders subHeader="Check out" mainHeader="Our Menu" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-2">
                {menuItems.map(item => (
                    <MenuItem key={item._id} {...item} addToCart={() => addToCart(item)} />
                ))}
            </div>
        </div>
    );
}
