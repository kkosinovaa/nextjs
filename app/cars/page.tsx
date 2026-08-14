import {getCars} from "@/app/services/cars";
import {makeGetServerInsertedHTML} from "next/dist/server/app-render/make-get-server-inserted-html";

export default async function CarsPage (){
    const cars = await getCars();

    return (
        <main>
            <h1>Cars</h1>
            {cars.map((car) => (
                <div key={car.id}>
                    <h2>{car.brand}</h2>
                    <p>Price: ${car.price}</p>
                    <p>Year: {car.year}</p>
                </div>
            ))}
        </main>
    )

}