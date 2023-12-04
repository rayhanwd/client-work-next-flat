import FIeldWithLabel from "@/app/components/FIeldWithLabel/FIeldWithLabel";
import type { Metadata } from "next";
import PhoneNumber from "./components/field/PhoneNumber";
import FieldWithSearch from "@/app/components/FieldWithSearch/FieldWithSearch";
import Image from "next/image";

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
          <div className="flex gap-[53px] mt-[50px]">
            <div className="">
              <h2>Localization</h2>
              <div className="fc flex-wrap gap-[50px]">
                <FieldWithSearch />
                <FieldWithSearch />
                <FieldWithSearch />
                <FieldWithSearch />
                <FieldWithSearch />
                <FieldWithSearch />
              </div>
              <p>5.354708943431563,-3.9874719330168893</p>
              <button>Edit</button>
              {/* check box , Share the exact localization */}
              <input type="checkbox" name="" id="" />
              <span>Share the exact localization</span>
            </div>
              <Image src={'/Map.png'} width={486} height={286} alt="map" />
          </div>
        </div>
      </section>
    </>
  );
}
