import React from "react";

import { IIcon } from "@/../types";

const ProfileIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4723 2C9.85229 2 7.72229 4.13 7.72229 6.75C7.72229 9.32 9.73229 11.4 12.3523 11.49C12.4323 11.48 12.5123 11.48 12.5723 11.49C12.5923 11.49 12.6023 11.49 12.6223 11.49C12.6323 11.49 12.6323 11.49 12.6423 11.49C15.2023 11.4 17.2123 9.32 17.2223 6.75C17.2223 4.13 15.0923 2 12.4723 2Z"
        fill="currentColor"
      />
      <path
        d="M17.5523 14.1499C14.7623 12.2899 10.2123 12.2899 7.40225 14.1499C6.13225 14.9999 5.43225 16.1499 5.43225 17.3799C5.43225 18.6099 6.13225 19.7499 7.39225 20.5899C8.79225 21.5299 10.6323 21.9999 12.4723 21.9999C14.3123 21.9999 16.1523 21.5299 17.5523 20.5899C18.8123 19.7399 19.5123 18.5999 19.5123 17.3599C19.5023 16.1299 18.8123 14.9899 17.5523 14.1499Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ProfileIcon;
