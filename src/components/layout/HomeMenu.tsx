'use client';

import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";
import SectionHeaders from "./SectionHeaders";

const menuItems = [
    {
        _id: "1",
        image: "/logo.png",
        name: "Tiramisu",
        description: "Tiramisu description",
        price: 8.99,
    },
    {
        _id: "2",
        image: "/logo.png",
        name: "Chocolate Cake",
        description: "Rich and creamy chocolate cake",
        price: 9.99,
    },
    {
        _id: "3",
        image: "/logo.png",
        name: "Cheesecake",
        description: "Classic New York cheesecake",
        price: 10.99,
    },
    // Add more menu items as needed
];

export default function HomeMenu() {
    return (
        <section className="">
            <div className="text-center mb-4">
                <SectionHeaders
                    subHeader={'check out'}
                    mainHeader={'Our Best Sellers'} />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
                {menuItems.map(item => (
                    <MenuItem key={item._id} {...item} />
                ))}
            </div>
        </section>
    );
}
