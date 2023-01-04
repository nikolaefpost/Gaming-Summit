import Image from "next/image";
import React from "react";

import {
  facebookIcon,
  instaIcon,
  linkedinIcon,
} from "../../../assets/icon/landing";
import { useLanguage } from "../../../context";
import styles from "../../../styles/componentsStyle/landing/LandingFooter.module.scss";

interface ISocial {
  id: number;
  icon: string;
  href: string;
}

const social: ISocial[] = [
  {
    id: 0,
    icon: facebookIcon as string,
    href: "https://www.facebook.com/tallinngamingsummit/",
  },
  {
    id: 1,
    icon: instaIcon as string,
    href: "https://www.instagram.com/tallinngamingsummit/",
  },
  // { id: 2, icon: twitterIcon, href: "" },
  {
    id: 3,
    icon: linkedinIcon as string,
    href: "https://www.linkedin.com/company/tallinngamingsummit/",
  },
];
const LandingFooter: React.FC = () => {
  const { text } = useLanguage();
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h3>{text[68] || "WE VALUE YOUR PRIVACY"}</h3>
          <p>
            {text[69] ||
              "The information you provide is used solely for the use of the virtual private network. We will not sell your information to any other party."}
          </p>
        </div>
        <div className={styles.center}>
          <h3>{text[70] || "CUSTOMER SUPPORT"}</h3>
          <a href="mailto:info@tallinngamingsummit.com">
            {text[71] ||
              "Our technical support team is ready to answer questions. You can contact us at info@tallinngamingsummit.com"}
          </a>
        </div>
        <div className={styles.right}>
          <h3>{text[72] || "FIND US ON SOCIAL MEDIA"}</h3>
          <div className={styles.social}>
            {social.map((item) => (
              <a href={item.href} key={item.id} className={styles.item}>
                <Image src={item.icon} width={16} height={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        {text[73] || "Copyright ® 2022 All rights Rcerved"}
      </div>
    </div>
  );
};

export default LandingFooter;
