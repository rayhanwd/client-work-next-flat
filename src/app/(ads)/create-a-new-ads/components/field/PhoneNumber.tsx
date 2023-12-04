"use client";
import React, { ChangeEvent, useState } from "react";

type Props = {};

export default function PhoneNumber({}: Props) {
  const [countryCode, setCountryCode] = useState<string>("");

  const handlePhoneNumberChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value;

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/callingcode/${phoneNumber}`
      );
      // console.log(response)
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          const countryCode = data[0].cca2;
          setCountryCode(countryCode);
        }
      } else {
        console.error("Failed to fetch country details");
      }
    } catch (error) {
      console.error("Error fetching country details: ", error);
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="phoneNumber" className="phone-label mb-[11px]">
        Phone number
      </label>
      <div className="phone-field">
        <div className="fc ml-[10px]">
          <span>+88</span>
          <div className="ml-[2px] w-[1px] h-[30px] bg-[#E0E4EC]"></div>
        </div>
        <input
          type="tel"
          name="phoneNumber"
          className="w-[219px] h-[16px] pl-[14px]"
          onChange={handlePhoneNumberChange}
          placeholder="Please enter your phone number"
        />
      </div>
    </div>
  );
}
