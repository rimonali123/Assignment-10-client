
import { Typewriter } from 'react-simple-typewriter'

import { Fade } from "react-awesome-reveal";
const ExtraSection2 = () => {
    return (
        <div>
            <div className="mt-10" >
                <h1 className="text-center text-4xl font-bold  mb-4 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                    <Typewriter
                        words={['Our Company Manager Team']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <p className="text-center text-xl text-purple-700  lg:w-[700px] mx-auto">Our Awasome Craft Store management team: Visionaries crafting colorful futures. Committed to quality, creativity, and customer satisfaction. Inspiring teams to paint the world with brilliance and innovation.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-9" >

               <Fade>
               <div className="card card-compact border-2 border-yellow-500  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/1qw10d1/images-13.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold"> Abir John.smith</h2>
                        <p className="font-bold ">Email: jhon1222@gmail.com</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-yellow-500 w-full text-white text-xl ">Contact us</button>
                        </div>
                    </div>
                </div>
               </Fade>


                <Fade>
                <div className="card card-compact border-2 border-yellow-500  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/HK7NmPq/images-12.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Jsmith</h2>
                        <p className="font-bold">Email: jsmithjhon122@gmail.com</p>
                        <div className="card-actions justify-end">
                            <button className="btn  bg-yellow-500 w-full text-white text-xl  ">Contact us</button>
                        </div>
                    </div>
                </div>
                </Fade>

                <Fade>
                <div className="card card-compact border-2 border-yellow-500  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/tq3tHWf/images-11.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold"> Somrat Akbar</h2>
                        <p className="font-bold">Email: smithjhon122@gmail.com</p>
                        <div className="card-actions justify-end">
                            <button className="btn  bg-yellow-500 w-full text-white text-xl ">Contact us</button>
                        </div>
                    </div>
                </div>
                </Fade>

                <Fade>
                <div className="card border-2 border-yellow-500 card-compact  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/yR2xY2J/images-10.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Leo Martinej</h2>
                        <p className="font-bold">Email: jhon122@gmail.com</p>
                        <div className="card-actions justify-end">
                            <button className="btn  bg-yellow-500 w-full text-white text-xl ">Contact us</button>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>



        </div>

    );
};

export default ExtraSection2;