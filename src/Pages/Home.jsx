import { useLoaderData } from "react-router-dom";
import HomeArtCraftSection from "../Components/HomeArtCraftSection";
import Slider from "../Components/Slider";
import TopArtCategory from "../Components/TopArtCategory";
import ExtraSection1 from "../Components/ExtraSection1";
import ContactUs from "../Components/ContactUs";
import ExtraSection2 from "../Components/ExtraSection2";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const allData = useLoaderData();

    return (
        <div  style={{ backgroundImage: 'url()' }}>
            <Helmet>
                <title>Awasome Craft Store || Home</title>
            </Helmet>
            <Slider></Slider>
            <HomeArtCraftSection allData={allData}></HomeArtCraftSection>
            <TopArtCategory></TopArtCategory>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;