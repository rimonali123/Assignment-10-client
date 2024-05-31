import { useLoaderData } from "react-router-dom";
import WaterPaintingCategoryCard from "../Components/WaterPaintingCategoryCard";


const WaterPainting = () => {
    const waterData = useLoaderData();
    return (
        <div>
            <div className="mt-5">
            <h1 className="text-4xl font-bold text-center">Watercolour Painting</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    waterData.map(data => 
                    <WaterPaintingCategoryCard
                    key={data._id}
                    data={data}
                    ></WaterPaintingCategoryCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default WaterPainting;