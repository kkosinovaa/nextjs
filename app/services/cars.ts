import {Car, CreateCar} from "@/app/type/car";

const API_URL = "http://bigbird.space/carsAPI/v1";


export async function getCars(): Promise<Car[]> {
    const response = await fetch(`${API_URL}/cars`);
    if (!response.ok) {
        throw new Error("Failed to fetch cars");
    }

    return response.json();
}

export async function createCar(car: CreateCar): Promise<Car> {
    const response = await fetch(`${API_URL}/cars`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
    });
    if (!response.ok) {
        throw new Error("Failed to create car");
    }

    return response.json();
}