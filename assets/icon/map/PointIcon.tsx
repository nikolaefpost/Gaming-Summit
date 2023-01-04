import React from "react";

import { IIcon } from "../../../types";

const PointIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg
      id="map"
      className={className}
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.35337 17.3751V17.3751L8.50962 22.5626C9.32212 23.3751 10.6034 23.3751 11.4159 22.5626L16.5721 17.4063C16.7284 17.2813 16.8534 17.1251 17.0096 17.0004C21.0721 12.9376 20.8846 6.28131 16.4784 2.46881C12.7596 -0.812444 7.13462 -0.812444 3.44712 2.40631C-0.959125 6.25006 -1.14663 12.9063 2.91587 16.9688C3.07212 17.0938 3.19712 17.2188 3.35337 17.3751"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.94714 6.34375C11.8534 6.34375 13.3846 7.875 13.3846 9.78125C13.3846 11.6875 11.8534 13.2188 9.94714 13.2188C8.04089 13.2188 6.50964 11.6875 6.50964 9.78125C6.50964 7.875 8.04089 6.34375 9.94714 6.34375Z"
        fill="#FE3F8E"
      />
    </svg>
  );
};

export default PointIcon;
