"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateCarPage() {
    const router = useRouter();

    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [year, setYear] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const response = await fetch("/api/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                brand,
                price: Number(price),
                year: Number(year),
            }),
        });

        if (!response.ok) {
            alert("Error during creating car!");
            return;
        }

        router.push("/cars");
        router.refresh();
    }

    return (
        <main>
            <h1>Create car</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Brand</label>
                    <input
                        type="text"
                        value={brand}
                        onChange={(event) => setBrand(event.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        min="0"
                        max="1000000"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Year</label>
                    <input
                        type="number"
                        min="1990"
                        max="2026"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                        required
                    />
                </div>

                <button type="submit">
                    Create car
                </button>
            </form>
        </main>
    );
}