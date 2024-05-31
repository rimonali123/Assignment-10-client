import { useLoaderData } from "react-router-dom";
import CharcoalCategoryCard from "../Components/CharcoalCategoryCard";


const CharcoalSketching = () => {
    const CharcoalData = useLoaderData();
    return (
        <div>
            <div className="mt-5">
            <h1 className="text-4xl font-bold text-center">Charcoal Sketching</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    CharcoalData.map(data => 
                    <CharcoalCategoryCard
                    key={data._id}
                    data={data}
                    ></CharcoalCategoryCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default CharcoalSketching;