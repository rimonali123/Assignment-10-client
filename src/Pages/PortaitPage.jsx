import { useLoaderData } from "react-router-dom";
import PortaitCategoryCard from "../Components/PortaitCategoryCard";


const PortaitPage = () => {
    const PortaitData = useLoaderData();
    return (
        <div>
            <div className="mt-5">
            <h1 className="text-4xl font-bold text-center">Portrait Drawing</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    PortaitData.map(data => 
                    <PortaitCategoryCard
                    key={data._id}
                    data={data}
                    ></PortaitCategoryCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default PortaitPage;