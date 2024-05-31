
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import { Fade } from "react-awesome-reveal";
AOS.init();


const CategorySlider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                breakpoints={{
                    350: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to='/LandCategory'>
                        <Fade className=" bg-base-100 border border-r-0 h-[250px] py-2 flex items-center">
                            <div>
                                <figure className="px-5 pt-5 ">
                                    <img src="https://i.ibb.co/rk90bw7/langscap-paintaing.jpg" alt="" className="w-64  h-28 border mx-auto" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-lg font-bold">Landscape Painting</h2>
                                    <h2 className="card-title text-lg font-bold">Price : 39 $</h2>

                                </div>

                            </div>
                        </Fade>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>


                    <Link to='/PortaitCategory'>
                        <Fade className=" bg-base-100 border border-r-0 h-[250px] py-2 flex items-center">
                            <div>
                                <figure className="px-5 pt-5 ">
                                    <img src="https://i.ibb.co/nDKHjY3/portait-drawing.webp" alt="" className="w-64  h-28 border mx-auto" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-lg font-bold">Portrait Drawing</h2>
                                    <h2 className="card-title text-lg font-bold">Price : 30 $</h2>

                                </div>
                            </div>
                        </Fade>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/WaterPaintingCategory'>
                        <Fade className=" bg-base-100 border border-r-0 h-[250px] py-2 flex items-center">
                            <div>
                                <figure className="px-5 pt-5 ">
                                    <img src="https://i.ibb.co/tqMb15q/watercolor-paintaing.webp" alt="" className="w-64  h-28 border mx-auto" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-lg font-bold">Water Painting</h2>
                                    <h2 className="card-title text-lg font-bold">Price : 49 $</h2>

                                </div>
                            </div>
                        </Fade>
                    </Link>

                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/OilPaintingCategory'>
                        <Fade className=" bg-base-100 border border-r-0 h-[250px] py-2 flex items-center">
                            <div>
                                <figure className="px-5 pt-5 ">
                                    <img src="https://i.ibb.co/5xYCtYv/rsz-oil-painting.jpg" alt="" className="w-64  h-28 border mx-auto" />

                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-lg font-bold">Oil Painting</h2>
                                    <h2 className="card-title text-lg font-bold">Price : 45 $</h2>

                                </div>
                            </div>
                        </Fade>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/CharcoalSketchingCategory'>
                        <Fade className=" bg-base-100 border border-r-0 h-[250px] py-2 flex items-center">
                            <div>
                                <figure className="px-5 pt-5 ">
                                    <img src="https://i.ibb.co/BLbGHr9/ch.jpg" alt="" className="w-64  h-28 border mx-auto" />

                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-lg font-bold">Charcoal Sketching</h2>
                                    <h2 className="card-title text-lg font-bold">Price : 25 $</h2>

                                </div>
                            </div>
                        </Fade>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/cartoonDrawingCategory'>
                        <Fade className=" bg-base-100 border h-[250px] py-2 flex items-center">
                            <div>
                                <figure className="px-5 pt-5 ">
                                    <img src="https://i.ibb.co/1GMdTPM/cartoon.jpg" alt="" className="w-64  h-28 border mx-auto" />

                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-lg font-bold">Cartoon Drawing</h2>
                                    <h2 className="card-title text-lg font-bold">Price : 30 $</h2>

                                </div>
                            </div>
                        </Fade>
                    </Link>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default CategorySlider;