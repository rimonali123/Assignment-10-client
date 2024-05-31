import { useLoaderData } from "react-router-dom";
import CartoonCategoryCard from "../Components/CartoonCategoryCard";


const CartoonDrawingPage = () => {
    const CharcoalData = useLoaderData();
    return (
        <div>
            <div className="mt-5">
            <h1 className="text-4xl font-bold text-center">Cartoon Drawing</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    CharcoalData.map(data => 
                    <CartoonCategoryCard
                    key={data._id}
                    data={data}
                    ></CartoonCategoryCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default CartoonDrawingPage;