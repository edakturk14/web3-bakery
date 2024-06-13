'use client'

import Hero from "@/components/layout/Hero";
import MenuItem from "@/components/layout/Menu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { useAccount } from "wagmi";

import AboutUs from "@/components/layout/AboutUs";
import { useCart } from "@/components/Cart";

export default function Home() {
  const account = useAccount();

  const { addToCart, cartItemCount, bestSellerCartItems } = useCart();

  return (
    <div>
      <Hero />
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-center m-4">
          <SectionHeaders subHeader="Check out" mainHeader="Our Best Sellers" />
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          {bestSellerCartItems.map(item => (
            <MenuItem key={item._id} {...item} addToCart={() => addToCart(item)} />
          ))}
        </div>
      </div>
      <AboutUs />
    </div>
  );
}