import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Helmet } from "react-helmet-async";
AOS.init();

const ExtraSection1 = () => {
    return (
        <div className=" mt-10  " id='about'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className="text-2xl md:text-5xl font-bold text-center text-red-500">About Us</h1>
        <p data-aos="zoom-in" data-aos-duration="1500" className="text-base lg:text-3xl font-bold   md:w-[700px] mx-auto text-center mt-3 uppercase bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">WelCome to our Awasome Craft Store company</p>

        <div className="flex mt-10 flex-col-reverse md:flex-row items-center gap-10">
            <div className="flex-1">
                <h1 data-aos="zoom-in" data-aos-duration="1500" className="text-xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-orange-700 to-green-400 text-transparent bg-clip-text animate-gradient ml-2">About our Company & Terms :</h1>

                <div>
                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium text-violet-500">
                        What makes Awasome Craft Store unique?
                        </div>
                        <div className="collapse-content">
                            <p>At Awasome Craft Store, we pride ourselves on our commitment to quality and innovation. Our paints are formulated to inspire creativity and bring dreams to life on canvas.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium text-violet-500">
                        Are Awasome Craft Store eco-friendly?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we prioritize sustainability in our manufacturing processes. Our paints are environmentally friendly and safe for both artists and the planet.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium text-violet-500">
                        Do you offer a wide range of colors?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely! Our extensive color palette ensures that artists can find the perfect shade to realize their visions. From bold hues to subtle tones, we have it all.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium text-violet-500">
                        How can I use Awasome Craft Store effectively?
                        </div>
                        <div className="collapse-content">
                            <p>Whether you are a beginner or an experienced artist, our paints are designed for easy application and versatility. Experiment with various techniques, from blending to layering, to achieve your desired effects. Check out our tutorials and tips for inspiration!</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium text-violet-500">
                        How can I purchase Awasome Craft Store products?
                        </div>
                        <div className="collapse-content">
                            <p>You can purchase Awasome Craft Store products directly from our website or through authorized retailers. Explore our online store for our full range of paints, accessories, and exclusive offers. Stay updated on our social media channels for promotions and new product launches.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500">
                <img src="https://i.ibb.co/2SD1vMB/images-2-removebg-preview.png" alt="" className="w-96 h-96 rounded-full border" />
            </div>
        </div>
        {/* <div className="p-5 md:p-10 mt-10 bg-gray-600  text-white text-4xl font-bold grid grid-cols-1 md:grid-cols-4 py-4 gap-10 md:gap-16 lg:gap-28 text-center w-full  mx-auto items-center">
            <h1 data-aos="zoom-in" data-aos-duration="1000">2500 Clients</h1>
            <h1 data-aos="fade-up" data-aos-duration="1000">3055 Bookings</h1>
            <h1 data-aos="zoom-in" data-aos-duration="1000">100 Swimming</h1>
            <h1 data-aos="fade-down" data-aos-duration="1000">1540 Apartment</h1>
        </div> */}
    </div>
    );
};

export default ExtraSection1;