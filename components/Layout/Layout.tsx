import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

import { IlayoutItems } from "@/../types";

import {
  GammingIcon,
  ProfileIcon,
  ProgramIcon,
  RaitingIcon,
} from "../../assets/icon/Layout";
import { QrCodeIcon } from "../../assets/icon/Profile";
import styles from "../../styles/componentsStyle/Layout.module.scss";

interface ILayout {
  children?: React.ReactNode;
  title?: string;
  backHref?: string;
}

const Layout: React.FC<ILayout> = ({ children, title, backHref }) => {
  const qrCode = "/toolbox/profile/qrcode";
  const itemsMenu: IlayoutItems[] = [
    { id: 0, title: "Profile", icon: ProfileIcon, href: "/toolbox/profile" },
    { id: 1, title: "Rating", icon: RaitingIcon, href: "/toolbox/rating" },
    { id: 2, title: "Program", icon: ProgramIcon, href: "/toolbox/program" },
    { id: 3, title: "Gamming", icon: GammingIcon, href: "/toolbox/map" },
  ];
  const router = useRouter();
  return (
    <div className={styles.layout}>
      <div className={styles.redSpots} />
      <div className={styles.title}>
        <Link href={backHref as string}>
          <a className={styles.button_left} type="button">
            <HiArrowNarrowLeft />
          </a>
        </Link>
        <Link href={qrCode}>
          <button type="button" className={styles.button_right}>
            <QrCodeIcon />
          </button>
        </Link>
        {title}
      </div>
      {children}
      <div className={styles.footer}>
        {itemsMenu.map((item) => (
          <Link href={item.href} key={item.id}>
            <a
              className={classNames(styles.item, {
                [styles.active_item]: item.href === router.pathname,
              })}
            >
              <item.icon className={styles.icon} />
              <span>{item.title}</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Layout;
