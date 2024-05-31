import { useLoaderData } from "react-router-dom";
import LandCategoryCard from "../Components/LandCategoryCard";


const LandScap = () => {
    const landData = useLoaderData();
    return (
        <div>
            <div className="mt-5">
            <h1 className="text-4xl font-bold text-center">Landscape Painting</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    landData.map(data => 
                    <LandCategoryCard
                    key={data._id}
                    data={data}
                    ></LandCategoryCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default LandScap;