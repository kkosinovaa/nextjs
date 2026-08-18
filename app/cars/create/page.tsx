"use client";
import Joi from "joi";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";


interface CarFormData {
    brand: string;
    price: number;
    year: number;
}
const carSchema = Joi.object({
    brand: Joi.string().trim().required().messages({
        "string.empty" : "Поле 'Brand' не може бути порожнім",
        "any.required" : "Поле є обов'язковим",
    }),

    price: Joi.number().min(0).max(1000000).required().messages({
        "number.base": "Ціна повинна бути числом",
        "number.min": "Ціна не може бути меншою за 0",
        "number.max": "Ціна не може перевищувати 1000000",
        "any.required": "Поле 'Price' є обов'язковим",
    }),

    year: Joi.number().min(1990).max(2026).required().messages({
        "number.base": "Рік повинен бути числом",
        "number.min": "Рік не може бути меншим за 1990",
        "number.max": "Рік не може бути більшим за 2026",
        "any.required": "Поле 'Year' є обов'язковим",
    })
})

export default function CreateCarPage(){
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CarFormData>({
        resolver: joiResolver(carSchema),
    });

    async function onSubmit(data: CarFormData) {
        const response = await fetch("/api/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Brand</label>
                    <input
                        type="text"
                        {...register("brand")}
                    />
                    {errors.brand && (
                        <p style={{ color: "red", fontSize: "14px", margin: "5px 0 0" }}>
                            {errors.brand.message}
                        </p>
                    )}
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label>Price</label>
                    <input
                        type="number"
                        {...register("price", { valueAsNumber: true })}
                    />
                    {errors.price && (
                        <p style={{ color: "red", fontSize: "14px", margin: "5px 0 0" }}>
                            {errors.price.message}
                        </p>
                    )}
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label>Year</label>
                    <input
                        type="number"
                        {...register("year", { valueAsNumber: true })}
                    />
                    {errors.year && (
                        <p style={{ color: "red", fontSize: "14px", margin: "5px 0 0" }}>
                            {errors.year.message}
                        </p>
                    )}
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create car"}
                </button>
            </form>
        </main>
    );
}