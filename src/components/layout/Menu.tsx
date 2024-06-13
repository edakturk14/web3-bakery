import Image from "next/image";

interface MenuItemProps {
    image: string;
    name: string;
    description: string;
    price: number;
    addToCart: () => void;
}

export default function MenuItem({ image, name, description, price, addToCart }: MenuItemProps) {
    return (
        <div className="w-68 h-96 rounded-lg overflow-hidden shadow-md p-4 flex flex-col">
            <div className="flex items-center justify-center h-36">
                <Image
                    src={image}
                    alt={name}
                    width={220}
                    height={144}
                    className="object-cover"
                />
            </div>
            <h4 className="text-m font-semibold text-center mt-4">{name}</h4>
            <p className="text-gray-600 text-center mt-2 text-sm">{description}</p>
            <p className="text-xl font-bold text-center text-blue-500 mt-2">${price.toFixed(2)}</p>
            <div className="mt-auto flex justify-center">
                <button
                    className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-700 mx-2 w-full"
                    onClick={addToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
