import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { RiCloseFill } from "react-icons/ri";

import { INavData } from "@/../types";

import {
  facebookIcon,
  instaIcon,
  linkedinIcon,
} from "../../../assets/icon/landing";
import { useLanguage } from "../../../context";
import styles from "../../../styles/componentsStyle/landing/MobilMenu.module.scss";

interface IMobilMenu {
  navItem: INavData[];
  onClose: () => void;
}

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

const MobilMenu: NextPage<IMobilMenu> = ({ navItem, onClose }) => {
  const { text } = useLanguage();
  return (
    <div className={styles.menu}>
      <div className={styles.background} />
      <div className={styles.smoke1} />
      <div className={styles.smoke2} />
      <div className={styles.red_spots1} />
      <div className={styles.red_spots2} />
      <div className={styles.red_shadow} />

      <div className={styles.close} onClick={onClose}>
        {text[75] || "close"}
        <RiCloseFill />
      </div>

      <div className={styles.block_links}>
        <div className={styles.links}>
          {navItem.map((item) => (
            <div key={item.id} className={styles.link}>
              <a href={item.href} onClick={onClose}>
                {item.title}
              </a>
              <div
                className={styles.line}
                style={item.isHover ? { opacity: 1 } : {}}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.footer}>
        <div className={styles.ticket}>
          <h2>
            {text[63] || "Come enjoy the event with us"} {text[64]} {text[65]}
          </h2>
          <a href="https://fienta.com/talinn-gaming-summit-2022">
            {text[9] || "Buy a ticket"}
          </a>
        </div>
        <div className={styles.support}>
          <h2>{text[70] || "CUSTOMER SUPPORT"}</h2>
          <a href="mailto:info@tallinngamingsummit.com">
            {text[71] ||
              "Have any more question? Write us at info@tallinngamingsummit.com"}
          </a>
        </div>
        <div className={styles.priority}>
          <h2>{text[72] || "FIND US ON SOCIAL MEDIA"}</h2>
          <div className={styles.social}>
            {social.map((item) => (
              <a href={item.href} key={item.id} className={styles.item}>
                <Image src={item.icon} width={16} height={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilMenu;
