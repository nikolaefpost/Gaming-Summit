import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import React, { useEffect, useState } from "react";

import { INavData } from "@/../types";

// import { BiChevronDown } from "react-icons/bi";
import {
  // arrowUpRight,
  globeIcon,
  menuIcon,
} from "../../../assets/icon/landing";
import { estonia, russia, usa } from "../../../assets/icon/navbar";
import { useLanguage } from "../../../context";
import styles from "../../../styles/componentsStyle/landing/Navbar.module.scss";
import MobilMenu from "../MobilMenu";

// import {signOut, useSession} from "next-auth/react";

interface INavbar {
  label: string;
}

interface ILabel {
  label: string;
  icon: string;
  value: string;
}

const Navbar: React.FC<INavbar> = ({ label }) => {
  const { text, onChangeLang, lang } = useLanguage();
  console.log(lang);
  // console.log(lang)
  // const {data: session} = useSession();
  const navData: INavData[] = [
    { id: 0, title: text[1], href: "#why", outerHref: "/", isHover: true },
    {
      id: 1,
      title: text[2] || "Program",
      href: "#program",
      isHover: false,
    },
    {
      id: 2,
      title: text[3] || "People",
      href: "#people",
      isHover: false,
    },
    {
      id: 3,
      title: text[4] || "Tickets",
      href: "#tickets",
      isHover: false,
    },
    {
      id: 4,
      title: text[5] || "Tallinn",
      href: "#about",
      isHover: false,
    },
    // {
    //   id: 5,
    //   title: text[78] || "News",
    //   href: "#news",
    //   outerHref: "/news",
    //   isHover: false,
    // },
  ];

  const langLabel: ILabel[] = [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    { label: "Russia", icon: russia, value: "Rus" },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    { label: "Estonia", icon: estonia, value: "Est" },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    { label: "USA", icon: usa, value: "Eng" },
  ];

  const [navItem, setNavItem] = useState<INavData[]>(navData);
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    setNavItem(navData);
  }, [text]);

  const onLanguage = (l: string): void => {
    onChangeLang(l);
    setIsLangOpen(false);
  };

  const onOpen = (): void => {
    setIsLangOpen((pre) => !pre);
  };

  const onClose = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    setNavItem((pre) => {
      return pre.map((item) =>
        item.href.slice(1) === label
          ? { ...item, isHover: true }
          : { ...item, isHover: false },
      );
    });
  }, [label]);
  return (
    <header className={styles.navbar}>
      {isOpen && (
        <div className={styles.mobil_menu}>
          <MobilMenu navItem={navItem} onClose={onClose} />
        </div>
      )}
      <div className={styles.menu} onClick={() => setIsOpen(true)}>
        <Image src={menuIcon as string} width={24} height={24} alt="menu" />
      </div>
      <div className={styles.links}>
        {navItem.map((item) => (
          <div key={item.id} className={styles.link}>
            {item.outerHref ? (
              <Link href={item.outerHref}>
                <a href={item.href}>{item.title}</a>
              </Link>
            ) : (
              <a href={item.href}>{item.title}</a>
            )}
            <div
              className={styles.line}
              style={item.isHover ? { opacity: 1 } : {}}
            />
          </div>
        ))}
      </div>
      <div className={styles.right}>
        {/* <Link href="auth/registration"> */}
        {/*  <a> */}
        {/*    {text[6] || "Join now"} */}
        {/*    <Image src={arrowUpRight as string} /> */}
        {/*  </a> */}
        {/* </Link> */}
        {/* {session ? */}
        {/*  <button onClick={()=> signOut()}> */}
        {/*    Log out */}
        {/* </button>: */}
        {/*  <Link href="/api/auth/signin"> */}
        {/*    <a> */}
        {/*      Sign in */}
        {/*    </a> */}
        {/*  </Link> */}
        {/* } */}

        {/* {session?.user?.name === "Alex" && <Link href="/api/auth/signin"> */}
        {/*  <a> */}
        {/*    Add blog */}
        {/*  </a> */}
        {/* </Link>} */}
        {/* {session && session.user?.name !== "Alex" && <div className={styles.user}>Hi {session.user?.name}!</div>} */}
        <div className={styles.language} onClick={onOpen}>
          <span>{lang}</span>
          <Image src={globeIcon as string} width={24} height={24} />
          {/* <BiChevronDown /> */}
        </div>
        {isLangOpen && (
          <div className={styles.modal_language}>
            {langLabel.map((item) => (
              <div
                key={item.label}
                className={styles.items}
                onClick={() => onLanguage(item.value)}
              >
                <Image src={item.icon} alt="country" />
                <div className={styles.label}>{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
