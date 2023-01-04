import React from "react";

import { IIcon } from "../../../types";

const RussianFlagIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg
      className={className}
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_250_773"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="22"
      >
        <rect
          x="1"
          y="1"
          width="26"
          height="20"
          rx="2"
          fill="white"
          stroke="white"
        />
      </mask>
      <g mask="url(#mask0_250_773)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 1C1.89543 1 1 1.89543 1 3V19C1 20.1046 1.89543 21 3 21H25C26.1046 21 27 20.1046 27 19V3C27 1.89543 26.1046 1 25 1H3Z"
          fill="#3D58DB"
          stroke="black"
          strokeOpacity="0.04"
        />
        <mask
          id="mask1_250_773"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="28"
          height="22"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 1V21H27V1H1Z"
            fill="white"
            stroke="white"
          />
        </mask>
        <g mask="url(#mask1_250_773)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 1C1.89543 1 1 1.89543 1 3V7.66667H27V3C27 1.89543 26.1046 1 25 1H3Z"
            fill="#F7FCFF"
            stroke="black"
            strokeOpacity="0.04"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 14.3333V18.9999C1 20.1045 1.89543 20.9999 3 20.9999H25C26.1046 20.9999 27 20.1045 27 18.9999V14.3333H1Z"
            fill="#C51918"
            stroke="black"
            strokeOpacity="0.04"
          />
        </g>
      </g>
    </svg>
  );
};

export default RussianFlagIcon;
