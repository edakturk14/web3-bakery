'use client'
import Link from "next/link";
import Image from "next/image";
import { BlueCreateWalletButton } from "./BlueCreateWalletButton";


export default function Header() {

    return (
        <header className="w-full bg-white shadow-md">
            <div className="container mx-auto md:flex justify-between p-4">
                <nav className="flex items-center gap-4 text-gray-500 font-semibold">
                    <Link href="/">
                        <div className="logo-container relative w-28 h-28">
                            <Image
                                src="/logo.png"
                                alt="Cake Gallery Logo"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </Link>
                    <Link href="/menu" className="hover:text-blue-500">Menu</Link>
                    <Link href="/about" className="hover:text-blue-500">About</Link>
                </nav>
                <nav className="flex gap-4 items-center text-gray-500 font-semibold">
                    <BlueCreateWalletButton />
                    <Link href="/my-cart" className="relative">
                        <Image src="/icons/ShoppingCart.png" alt="Cart" width={24} height={24} />
                    </Link>
                </nav>
            </div>
        </header>
    );
}