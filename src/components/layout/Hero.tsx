import Link from "next/link";

export default function Hero() {
    return (
        <div className="p-4 bg-gray-100 shadow-custom">
            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-4xl font-semibold">
                    <span className="text-primary text-7xl">
                        Cake
                    </span><br />
                    is always a<br />
                    good idea<br />
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    First bakery in Istanbul to accept crypto payments!
                </p>
                <div className="flex gap-4 text-sm">
                    <Link href="/menu" className="flex justify-center items-center bg-primary uppercase text-white px-4 py-2 rounded-full hover:bg-primary-dark">
                        Order now
                    </Link>
                    <Link href="/about" className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    );
}
