// MenuItem.tsx
import Image from "next/image";

interface MenuItemProps {
    image: string;
    name: string;
    description: string;
    price: number;
}

export default function MenuItem({ image, name, description, price }: MenuItemProps) {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md p-4 flex flex-col">
            <div className="flex items-center justify-center">
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={200}
                    className="mx-auto"
                />
            </div>
            <h4 className="text-lg font-semibold text-center mt-4">{name}</h4>
            <p className="text-gray-600 text-center mt-2">{description}</p>
            <p className="text-xl font-bold text-center text-blue-500 mt-2">${price.toFixed(2)}</p>
            <div className="mt-auto flex justify-center">
                <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-700 mx-2 w-full">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
