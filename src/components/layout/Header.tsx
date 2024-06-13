import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full bg-white shadow-md">
            <div className="container mx-auto p-4 flex items-center justify-between md:hidden">
                <Link className="text-primary font-semibold text-2xl" href="/">
                    CAKE GALLERY
                </Link>
                <div className="flex gap-8 items-center">
                    <Link href="/gallery" className="relative">
                        <Image src="/icons/ShoppingCart.png" alt="Cart" width={24} height={24} />
                        <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">0</span>
                    </Link>
                    <button className="p-1 border">
                        <Image src="/icons/bars.svg" alt="Menu" width={24} height={24} />
                    </button>
                </div>
            </div>
            <div className="container mx-auto hidden md:flex items-center justify-between p-4">
                <nav className="flex items-center gap-6 text-gray-500 font-semibold">
                    <Link className="text-primary font-semibold text-2xl" href="/">
                        CAKE GALLERY
                    </Link>
                    <Link href="/gallery">Menu</Link>
                    <Link href="/gallery">About</Link>
                    <Link href="/gallery">Contact</Link>
                </nav>
                <nav className="flex items-center gap-4 text-gray-500 font-semibold">
                    <Link className="bg-primary rounded-full text-white px-8 py-2" href="/gallery">
                        Connect
                    </Link>
                    <Link href="/gallery" className="relative">
                        <Image src="/icons/ShoppingCart.png" alt="Cart" width={24} height={24} />
                        <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">0</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
