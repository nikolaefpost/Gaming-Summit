import React from 'react';
import {IIcon} from "../../../types";

const FileIcon: React.FC<IIcon> = ({className}) => {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.17911 8.31836H3.84668" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.17911 6.04468H3.84668" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.49984 3.77563H3.84668" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.29553 1L3.68107 1.00217C2.0249 1.01141 1 1.99783 1 3.50244V8.49756C1 10.0098 2.0333 11 3.70387 11L8.31773 10.9984C9.9739 10.9891 11 10.0022 11 8.49756V3.50244C11 1.99022 9.9661 1 8.29553 1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};

export default FileIcon;
