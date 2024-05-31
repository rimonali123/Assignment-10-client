import { useLoaderData } from "react-router-dom";
import AllCraftTable from "../Components/AllCraftTable";
import { Typewriter } from 'react-simple-typewriter'


const AllArtCraft = () => {
    const allData = useLoaderData();
    return (
        <div>

            <h1 className="md:text-4xl text-2xl text center font-bold mb-5 text-purple-700">
                <Typewriter
                    words={['All Art & Craft item here']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
            <div className="">
                <AllCraftTable allData={allData}></AllCraftTable>
            </div>

        </div>
    );
};

export default AllArtCraft;