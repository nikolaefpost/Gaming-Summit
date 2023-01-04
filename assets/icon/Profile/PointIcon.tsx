import React from 'react';
import {IIcon} from "../../../types";

const PointIcon: React.FC<IIcon> = ({className}) => {
  return (
    <svg className={className} width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 12.1194H4.44555V18.9889L14.1411 6.86943H9.69555V0L0 12.1194ZM6.19555 10.3694H3.64109L7.94555 4.98887V8.61943H10.5L6.19555 14V10.3694Z" fill="#FFDE59"/>
    </svg>

  );
};

export default PointIcon;
