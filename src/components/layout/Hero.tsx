import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero md:mt-4">
            <div className="py-8 md:py-12">
                <h1 className="text-4xl font-semibold">
                    <span className="text-primary text-5xl">
                        Cake
                    </span><br />
                    is always a<br />
                    good idea<br />
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    We make great cakes and are the first bakery in Istanbul to accept crypto payments!
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
                        Order now

                    </button>
                    <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    );
}