import {createCar} from "@/app/services/cars";
export async function POST(request: Request) {
    try {
        const data = await request.json();

        const car = await createCar(data);

        return Response.json(car);
    } catch {
        return Response.json(
            { message: "Failed to create car" },
            { status: 500 }
        );
    }
}