'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        shippingAddress: {
            address: "",
            city: "",
            state: "",
            postalCode: "",
            country: ""
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, section: string, field: string) => {
        const value = e.target.value;
        if (section === "shippingAddress") {
            setFormData({
                ...formData,
                [section]: {
                    ...formData[section],
                    [field]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [field]: value
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server
        console.log(formData);
        alert("Order placed successfully!");
        router.push("/"); // Redirect to home or another page
    };

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-3xl font-bold mb-6">Checkout</h2>
            <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="form-label" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleChange(e, "", "firstName")}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleChange(e, "", "lastName")}
                            className="form-input"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange(e, "", "email")}
                        className="form-input"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label" htmlFor="phoneNumber">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={(e) => handleChange(e, "", "phoneNumber")}
                        className="form-input"
                        required
                    />
                </div>

                <h3 className="text-2xl font-semibold mb-4">Shipping Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="form-label" htmlFor="address">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            value={formData.shippingAddress.address}
                            onChange={(e) => handleChange(e, "shippingAddress", "address")}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="city">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            value={formData.shippingAddress.city}
                            onChange={(e) => handleChange(e, "shippingAddress", "city")}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="postalCode">
                            Postal Code
                        </label>
                        <input
                            type="text"
                            id="postalCode"
                            value={formData.shippingAddress.postalCode}
                            onChange={(e) => handleChange(e, "shippingAddress", "postalCode")}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="country">
                            Country
                        </label>
                        <input
                            type="text"
                            id="country"
                            value={formData.shippingAddress.country}
                            onChange={(e) => handleChange(e, "shippingAddress", "country")}
                            className="form-input"
                            required
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                    <button
                        type="submit"
                        className="btn-primary  w-full"
                    >
                        Place Order
                    </button>
                </div>
            </form>
        </div>
    );
}
