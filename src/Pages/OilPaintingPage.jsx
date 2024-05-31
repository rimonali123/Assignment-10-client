import { useLoaderData } from "react-router-dom";
import OilPaintaingCategoryCard from "../Components/OilPaintaingCategoryCard";


const OilPaintingPage = () => {
    const OilPaintData = useLoaderData();
    return (
        <div>
            <div className="mt-5">
            <h1 className="text-4xl font-bold text-center">Oil Painting</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    OilPaintData.map(data => 
                    <OilPaintaingCategoryCard
                    key={data._id}
                    data={data}
                    ></OilPaintaingCategoryCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default OilPaintingPage;