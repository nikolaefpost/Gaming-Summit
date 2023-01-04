import React from 'react';
import {IIcon} from "../../../types";

const LogOutIcon: React.FC<IIcon> = ({className}) => {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z" fill="#A3B1D0"/>
      <path d="M4.56 11.2501L6.63 9.18009C6.78 9.03009 6.85 8.84009 6.85 8.65009C6.85 8.46009 6.78 8.26009 6.63 8.12009C6.34 7.83009 5.86 7.83009 5.57 8.12009L2.22 11.4701C1.93 11.7601 1.93 12.2401 2.22 12.5301L5.57 15.8801C5.86 16.1701 6.34 16.1701 6.63 15.8801C6.92 15.5901 6.92 15.1101 6.63 14.8201L4.56 12.7501H9V11.2501H4.56Z" fill="#A3B1D0"/>
    </svg>
  );
};

export default LogOutIcon;
