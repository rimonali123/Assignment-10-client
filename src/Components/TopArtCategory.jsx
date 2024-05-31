import CategorySlider from "./CategorySlider";
import { Typewriter } from 'react-simple-typewriter'



const TopArtCategory = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-16 mb-10">
                <Typewriter
                    words={['Top Art & Craft Categorigs']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
            <CategorySlider></CategorySlider>
        </div>
    );
};

export default TopArtCategory;