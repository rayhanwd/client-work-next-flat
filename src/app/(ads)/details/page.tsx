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
      <div className="details">
        <div className="flat">
          <h1 className="flat_title">Flat</h1>
          <div className="flat_icons">
            <div className="icon">
              <Flag />
            </div>
            <div className="icon">
              <UrlIcon />
            </div>
            <div className="icon">
              <LocationFlag />
            </div>
            <div className="icon">
              <LoveIcon />
            </div>
            <div className="XIcon">
              <XIcon />
            </div>
          </div>


          <div className="slider_img">
            <Image src="/slider1.png" alt="slider" width={619} height={297} />
          </div>

          <div className="dublin_box ">
            <h3 className="dublin">Dublin 01 - IFSC</h3>
            <div className="balance_apply">
              <button className="balance">
                124 600 €
              </button>
              <button className="apply_btn">
                Apply <RightSideIcon />
              </button>
            </div>
          </div>

          <div>
            <ul className="data">
              <li className="data_li">123 m²</li>
              <li className="data_li2">123 m²</li>
            </ul>
            <br />
            <ul className="data">
              <li className="data_li3">2 Bedroom</li>
              <li className="data_li4">2 Bedroom</li>
            </ul>
            <br />
            <ul className="data">
              <li className="data_li5">5 Room</li>
              <li className="data_li6">5 Room</li>
              <li className="data_li7">
                <GreenTik /> Requirements 1
              </li>
            </ul>
            <br />
            <ul className="data">
              <li className="data_li5">123 m² </li>
              <li className="data_li6">123 m²</li>
              <li className="data_li7">
                <GreenTik /> Requirements 2
              </li>
            </ul>
            <br />
            <ul className="data">
              <li className="data_li5">2 Bedroom</li>
              <li className="data_li6">2 Bedroom</li>
              <li className="data_li7">
                <YellowWarning /> Requirements 3
              </li>
            </ul>
            <br />
            <ul className="data">
              <li className="data_li5">5 Room</li>
              <li className="data_li6">5 Room</li>
              <li className="data_li7">
                <RedDanger /> Requirements 4
              </li>
            </ul>
            {/* ADS  */}

            <div className="ads_section">
              <p className="ads_content text-sm text-white font-roboto font-black leading-tight w-[448px] h-[34px] mx-auto pt-[9px]">
                Google Advertisement every 4 ads
              </p>
            </div>
            {/* View Card  */}

            <div className="view_card">
              <div className="view_icon">
                <MediaIcon />
                <div>
                  <p className="view_number">
                    2174
                  </p>
                  <p className="view_text">
                    Total Viewing
                  </p>
                </div>
              </div>
              <div className="view_icon">
                <MediaIcon />
                <div>
                  <p className="view_number">
                    574
                  </p>
                  <p className="view_text">
                    Total Applies
                  </p>
                </div>
              </div>
            </div>

            <textarea className="description" id="description" name="description" rows={4}></textarea>
            <Image
              src="/rate.png"
              alt="review"
              width={615}
              height={100}
              className="rateing"
            />

            <p className="review">
              Reviews
            </p>

          </div>

        </div>
        <div>
          <div>
            <Image src="/map.png" alt="map" width={732} height={929} />
            <Image
              src="/graph.png"
              alt="Graph Chart"
              width={754}
              height={238}
              className="graph"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default details;