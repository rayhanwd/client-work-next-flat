import React from "react";

function YellowWarning() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      fill="none"
      viewBox="0 0 11 11"
    >
      <rect width="11" height="11" fill="#FBBF24" rx="5.5"></rect>
      <path
        fill="#fff"
        d="M2.987 7.857h5.028c.351 0 .578-.345.419-.637L5.92 3.07c-.173-.322-.67-.322-.843 0L2.563 7.22c-.154.291.073.637.424.637zm2.908-.965c0 .216-.168.382-.409.382-.24 0-.41-.166-.41-.382v-.009c0-.215.17-.381.41-.381.24 0 .41.166.41.381v.01zm-.63-2.803h.472c.13 0 .207.103.193.233L5.722 6.01a.212.212 0 01-.222.197.213.213 0 01-.221-.197L5.07 4.322c-.013-.13.064-.233.194-.233z"
      ></path>
    </svg>
  );
}

export default YellowWarning;
