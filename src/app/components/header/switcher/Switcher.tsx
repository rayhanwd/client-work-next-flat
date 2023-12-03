import SunIco from "@/app/icons/SunIco";
import React, { useState } from "react";

export default function Switcher() {
  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log("Checkbox checked value:", event.target.checked);
  };

  return (
    <div className="relative inline-block w-[77.283px] mr-2 align-middle select-none">
      <input
        type="checkbox"
        name="toggle"
        className="outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-full h-[29.995px] rounded-full border-4 appearance-none cursor-pointer"
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
      <label
        htmlFor="Green"
        className={`fijb h-[29.995px] overflow-hidden rounded-full cursor-pointer duration-200 ease-in ${isChecked ? 'bg-blue-600':' bg-gray-300'}`}
      >
        <span className={`block rounded-[24px] w-[24px] h-[24px] p-[4px] bg-white ${ isChecked ? 'ml-auto':'mr-auto'}`}>
          <SunIco />
        </span>
      </label>
    </div>
  );
}
