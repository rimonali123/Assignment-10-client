import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import { Typewriter } from 'react-simple-typewriter'

const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                effect="fade"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide >

                    <div className="hero h-[300px] lg:h-[500px]  rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/TWmyfvz/img-5.jpg)' }}>
                        <div className="hero-overlay bg-opacity-30  rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">

                                <h1 className='lg:text-5xl text-white font-bold uppercase'>
                                    <Typewriter
                                        words={['Dream Vision Paints']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="lg:text-lg font-bold md:w-[600px] lg:w-[700px] mx-auto text-center" >Awaken your inner artist with our vivid paints. Transform dreams into masterpieces on your canvas of imagination. </p>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero h-[300px] lg:h-[500px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/wzNnpkx/image-2.webp)' }}>
                        <div className="hero-overlay bg-opacity-50 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>
                                    <Typewriter
                                        words={['Transforming Dreams into Art']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="lg:text-lg font-bold md:w-[600px] lg:w-[700px] mx-auto text-center" >Explore our enchanting paints and turn your dreams into stunning works of art. Let your imagination soar with every brushstroke.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[300px] lg:h-[500px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/wzWt1Bb/image-3.jpg)' }}
                    >

                        <div className="hero-overlay bg-opacity-30 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>
                                    <Typewriter
                                        words={[' Painting Your Fantasies to Life']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="lg:text-lg font-bold md:w-[600px] lg:w-[700px] mx-auto text-center" >Discover a spectrum of colors to bring your dreams alive on canvas. Dive into a world where every stroke tells a story</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[300px] lg:h-[500px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/2FGkrz1/ig4.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>
                                    <Typewriter
                                        words={['Where Dreams Find Expression']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="lg:text-lg font-bold md:w-[600px] lg:w-[700px] mx-auto text-center" >Color your dreams into reality with our rich palette. Let your imagination flow freely with every stroke of our brushes.</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[300px] lg:h-[500px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/zZ8dZDM/crimage.webp)' }}>
                        <div className="hero-overlay bg-opacity-50 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>
                                    <Typewriter
                                        words={['Crafting Dreams into Art']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>

                                <p className="lg:text-lg font-bold md:w-[600px] lg:w-[700px] mx-auto text-center" >Craft your dreams into tangible beauty with our premium paints. Experience the magic of turning fantasies into art.</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[300px] lg:h-[500px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/YZXggfc/6208bb8458e92226744772b5c2a8e60e.jpg)' }}>
                        <div className="hero-overlay bg-opacity-50 rounded-3xl" ></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>
                                    <Typewriter
                                        words={['Weaving Dreams into Artistry']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="lg:text-lg font-bold md:w-[600px] lg:w-[700px] mx-auto text-center" >Immerse yourself in a world of creativity with our exquisite paints. Let your dreams be woven into breathtaking works of art.</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;