import CraftItemCard from "./CraftItemCard";

import PropTypes from 'prop-types';
import { Typewriter } from 'react-simple-typewriter'


const HomeArtCraftSection = ({ allData }) => {
    console.log(allData)
    return (
        <div className="mt-10">

            <h1 className="text-4xl font-bold text-center">
                <Typewriter
                    words={['Art & Craft Items Section']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allData.slice(0, 6).map(data => <CraftItemCard
                        key={data._id}
                        data={data}
                    ></CraftItemCard>)
                }
            </div>
        </div>
    );
};
HomeArtCraftSection.propTypes = {
    allData: PropTypes.object.isRequired,
};

export default HomeArtCraftSection;