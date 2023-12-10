import FIeldWithLabel from "@/app/components/FIeldWithLabel/FIeldWithLabel";
import type { Metadata } from "next";
import PhoneNumber from "./components/PhoneNumber";
import FieldWithSearch from "@/app/components/FieldWithSearch/FieldWithSearch";
import PenIcon from "@/app/icons/PenIcon";
import Checkbox from "./components/CheckBox";
import SpaceDivider from "./components/SpaceDivider";
import BiggerPlus from "@/app/icons/Plus2xl";
import FieldWithLabel2 from "@/app/components/FIeldWithLabel/FieldWithLabel2";

export const metadata: Metadata = {
  title: "Next flat | create a new ad",
  description: "",
};
export default function CreateAnads() {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-black font-inter text-2xl font-medium opacity-25">
              Create a new ads
            </h2>
            <p className="text-black font-inter text-base font-normal opacity-25">
              Welcome to our form where you add as much information as need
              about your property
            </p>
          </div>
          {/* Mobile and address */}
          <div className="fc gap-[57px] mt-[32px]">
            <FIeldWithLabel
              // onChange={console.log("first")}
              name="Email Address"
              label="Email Address"
              type="email"
              placeholder="Please enter your email "
            />
            <PhoneNumber />
            <p className="text-[#000] font-inter text-base font-normal">
              Please enter your email address and phone number to not lose your
              progress
            </p>
          </div>
          {/* Localization */}
          <div>
            <h2 className="local-title mt-[60px]">Localization</h2>
            <div className="fc gap-[53px]">
              <div className="w-1/2">
                <div className="fc flex-wrap gap-[50px]">
                  <FieldWithSearch
                    name="Country"
                    label="Country"
                    placeholder="Country"
                    type="text"
                  />
                  <FieldWithSearch
                    name="City"
                    label="City"
                    placeholder="City"
                    type="text"
                  />
                  <FieldWithSearch
                    name="region"
                    label="Region / State"
                    placeholder="Region / State"
                    type="text"
                  />
                  <FieldWithSearch
                    name="Zip Code"
                    label="Zip Code"
                    placeholder="Zip Code"
                    type="text"
                  />
                  <FieldWithSearch
                    name="Area"
                    label="Area"
                    placeholder="Area"
                    type="text"
                  />
                  <FieldWithSearch
                    name="Street address"
                    label="Street address"
                    placeholder="Street address"
                    type="text"
                  />
                </div>
                <div className="fijb mt-[30px]">
                  <p className="local-caption">
                    5.354708943431563,-3.9874719330168893
                  </p>
                  <button className="fc ring-1 ring-[#0D77E7] rounded-[4px] py-[15px] px-[20px]">
                    <span>
                      <PenIcon />
                    </span>
                    <span className="ml-[8px] font-inter text-base font-normal text-[#0D77E7]">
                      Edit
                    </span>
                  </button>
                  <Checkbox label="Share the exact localization" />
                </div>
              </div>
              <img className="w-1/2 h-[486px]" src={"/Map.png"} alt="map" />
            </div>
          </div>
        </div>
        <div className="mt-[24px] mb-[10px]">
          <SpaceDivider />
        </div>
      </section>

      {/* basic information */}
      <section>
        <div className="container mx-auto">
          <div className="basic__container">
            {/* field container */}
            <div className="field__container">
              <div className="basic_info_top">
                <h1 className="basic_title">Basics information</h1>
                <div>
                  <FieldWithLabel2 />
                </div>
              </div>
            </div>
            {/* image container */}
            <div className="location__container">
              <img src="/building_photo2.png" alt="" srcset="" />
              <img src="/building_photo.png" alt="" srcset="" />
              <div className="add__new">
                <BiggerPlus />
              </div>
              <div>
                <div className="add__new">
                  <BiggerPlus />
                </div>
                <div className="add__new">
                  <BiggerPlus />
                </div>{" "}
                <div className="add__new">
                  <BiggerPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
