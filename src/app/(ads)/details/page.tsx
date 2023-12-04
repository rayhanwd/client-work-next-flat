"use-client"
import Flag from "@/app/icons/Flag";
import LocationFlag from "@/app/icons/LocationFlag";
import LoveIcon from "@/app/icons/LoveIcon";
import UrlIcon from "@/app/icons/UrlIcon";
import XIcon from "@/app/icons/XIcon";
import Image from "next/image";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const details = () => {

    return (
        <>
            <div className="grid grid-cols-2 justify-between gap-2 mt-[30px]">
                <div className="ml-[53px]">
                    <h1 className=" font-inter text-2xl font-medium">Flat</h1>
                    <div className="flex justify-end gap-3">
                        <div className="w-[31.36px] flex items-center justify-center h-[32.30px] bg-slate-100 rounded-full border border-slate-200">
                            <Flag />
                        </div>
                        <div className=" w-[31.36px] h-[32.30px] flex items-center justify-center bg-slate-100 rounded-full border border-slate-200">
                            <UrlIcon />
                        </div>
                        <div className="w-[31.36px] h-[32.30px] flex items-center justify-center bg-slate-100 rounded-full border border-slate-200">
                            <LocationFlag />
                        </div>
                        <div className="w-[31.36px] h-[32.30px] flex items-center justify-center bg-slate-100 rounded-full border border-slate-200">
                            <LoveIcon />
                        </div>
                        <div className="w-[31.36px] h-[32.30px] ml-[29px] flex items-center justify-center bg-slate-100 rounded-full border border-slate-200">
                            <XIcon />
                        </div>
                    </div>

                    <div>
                        <Swiper
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>
                    </div>
                </div>



                {/* parent 2  */}
                <div>
                    <Image
                        src="/map.png"
                        alt="map"
                        width={732}
                        height={929}
                    />
                    <Image
                        src="/graph.png"
                        alt="Graph Chart"
                        width={754}
                        height={238}
                        className="mt-[28px]"
                    />
                </div>

            </div>
        </>
    );
};

export default details;