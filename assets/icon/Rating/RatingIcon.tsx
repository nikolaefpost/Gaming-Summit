import React from "react";

import { IIcon } from "../../../types";

const RatingIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg
      className={className}
      width="15"
      height="19"
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.429443 12.1248H4.87499V18.9942L14.5705 6.8748H10.125V0.00537109L0.429443 12.1248ZM6.62499 10.3748H4.07054L8.37499 4.99424V8.6248H10.9294L6.62499 14.0054V10.3748Z"
        fill="#FFDE59"
      />
    </svg>
  );
};

export default RatingIcon;
