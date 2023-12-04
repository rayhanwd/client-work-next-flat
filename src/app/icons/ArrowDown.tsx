import React, { FC } from 'react';

interface ArrowDownProps {
  width: number;
  height: number;
}

const ArrowDown: FC<ArrowDownProps> = ({ width = 20, height = 55 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 55"
    fill="none"
  >
    <path
      d="M10.5 31.5504C10.2311 31.5504 9.96235 31.4478 9.75739 31.2429L3.30771 24.7932C2.89743 24.3829 2.89743 23.7177 3.30771 23.3076C3.71783 22.8975 4.3829 22.8975 4.79322 23.3076L10.5 29.0147L16.2068 23.3078C16.617 22.8977 17.2821 22.8977 17.6921 23.3078C18.1026 23.7179 18.1026 24.3831 17.6921 24.7934L11.2426 31.2431C11.0375 31.448 10.7687 31.5504 10.5 31.5504Z"
      fill="black"
      fillOpacity="0.3"
    />
  </svg>
);

export default ArrowDown;
