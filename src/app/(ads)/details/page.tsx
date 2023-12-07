"use-client";
import Flag from "@/app/icons/Flag";
import GreenTik from "@/app/icons/GreenTik";
import LocationFlag from "@/app/icons/LocationFlag";
import LoveIcon from "@/app/icons/LoveIcon";
import MediaIcon from "@/app/icons/MediaIcon";
import RedDanger from "@/app/icons/RedDanger";
import RightSideIcon from "@/app/icons/RightSideIcon";
import UrlIcon from "@/app/icons/UrlIcon";
import XIcon from "@/app/icons/XIcon";
import YellowWarning from "@/app/icons/YellowWarning";
import Image from "next/image";

const details = () => {
  return (
    <>
      <div className=" grid grid-cols-2 justify-between gap-4 mt-[30px]">
        <div className="ml-[53px] mb-[119px]">
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
          <div className="mt-[13px]">
            <Image src="/slider1.png" alt="slider" width={619} height={297} />
          </div>

          <div className="flex justify-between mt-[16px]">
            <h3 className="text-base font-light font-inter italic">
              Dublin 01 - IFSC
            </h3>
            <div className="flex">
              <button className="w-[130.22px] h-[52px] text-center text-black text-2xl font-bold font-inter mr-[32px]">
                124 600 €
              </button>
              <button className="w-[93px] h-10 px-3.5 pt-[9px] pb-[11px] bg-gray-100 rounded-md justify-center items-center gap-2.5 flex">
                Apply <RightSideIcon />
              </button>
            </div>
          </div>
          <div>
            <ul className=" list-none inline-flex font-bold font-inner">
              <li className="w-[76.56px]">123 m²</li>
              <li className="ml-[71.63px]">123 m²</li>
            </ul>
            <br />
            <ul className=" list-none inline-flex font-bold font-inner mt-[5.88px]">
              <li className="w-[87.73px]">2 Bedroom</li>
              <li className="ml-[60.63px]">2 Bedroom</li>
            </ul>
            <br />
            <ul className=" list-none inline-flex font-bold font-inner mt-[5.88px]">
              <li className="w-[76.56px]">5 Room</li>
              <li className="ml-[71.63px] w-[76.56px]">5 Room</li>
              <li className="ml-[248px] flex items-center justify-center gap-1">
                <GreenTik /> Requirements 1
              </li>
            </ul>
            <br />
            <ul className=" list-none inline-flex font-bold font-inner mt-[5.88px]">
              <li className="w-[76.56px]">123 m²</li>
              <li className="ml-[71.63px] w-[76.56px]">123 m²</li>
              <li className="ml-[248px] flex items-center justify-center gap-1">
                <GreenTik /> Requirements 2
              </li>
            </ul>
            <br />
            <ul className=" list-none inline-flex font-bold font-inner mt-[5.88px]">
              <li className="w-[87.73px]">2 Bedroom</li>
              <li className="ml-[60.63px]">2 Bedroom</li>
              <li className="ml-[243px] flex items-center justify-center gap-1">
                <YellowWarning /> Requirements 3
              </li>
            </ul>
            <br />
            <ul className=" list-none inline-flex font-bold font-inner mt-[5.88px]">
              <li className="w-[76.56px]">5 Room</li>
              <li className="ml-[71.63px] w-[76.56px]">5 Room</li>
              <li className="ml-[248px] flex items-center justify-center gap-1">
                <RedDanger /> Requirements 4
              </li>
            </ul>
            {/* ADS  */}
            <div className="w-[574px] h-[150px] bg-[#8D4E83] mt-[34px]">
              <p className="text-sm text-white font-roboto font-black leading-tight w-[448px] h-[34px] mx-auto pt-[9px]">
                Google Advertisement every 4 ads
              </p>
            </div>

            {/* View card */}
            <div className="flex justify-between">
              <div className="w-[279px] h-[81px] px-5 py-4 bg-white rounded-[10px] shadow border border-gray-200 justify-start items-center gap-3 inline-flex">
                <MediaIcon />
                <div>
                  <p className="w-[187px] text-gray-800 text-[22px] font-semibold font-inter leading-[30px]">
                    2174
                  </p>
                  <p className="w-[187px] text-gray-500 text-sm font-medium font-['Inter'] leading-tigh">
                    Total Viewing
                  </p>
                </div>
              </div>
              <div className="w-[279px] h-[81px] px-5 py-4 bg-white rounded-[10px] shadow border border-gray-200 justify-start items-center gap-3 inline-flex">
                <MediaIcon />
                <div>
                  <p className="w-[187px] text-gray-800 text-[22px] font-semibold font-inter leading-[30px]">
                    574
                  </p>
                  <p className="w-[187px] text-gray-500 text-sm font-medium font-['Inter'] leading-tigh">
                    Total Applies
                  </p>
                </div>
              </div>
            </div>

            {/* Text Description  */}
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-3 p-2 w-full bg-slate-100 rounded border border-slate-200 focus:outline-none focus:border-blue-500"
            ></textarea>

            <Image
              src="/rate.png"
              alt="review"
              width={615}
              height={100}
              className="mt-3"
            />

            <p className="mt-[22px] text-black text-sm font-medium font-roboto">
              Reviews
            </p>
          </div>
        </div>

        {/* parent 2  */}
        <div>
          <Image src="/map.png" alt="map" width={732} height={929} />
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
