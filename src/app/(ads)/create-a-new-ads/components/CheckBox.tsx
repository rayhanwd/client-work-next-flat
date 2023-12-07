'use client'
import { useState } from 'react';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <div className={`w-6 h-6 border-2  rounded-md bg-white transition-all duration-300 ease-in-out flex items-center justify-center ${isChecked ?'border-[#3C50E0]':'border-gray-500'}`}>
          {isChecked && (
            <svg
              className="w-4 h-4 text-[#3C50E0] fill-current"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                d="M6 12l4 4 10-10"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="ml-[10px] text-[#868686] font-roboto font-light text-base select-none">Share the exact localization</span>
    </label>
  );
};

export default Checkbox;
