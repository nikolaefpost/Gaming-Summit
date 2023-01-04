import classNames from "classnames";
import Image from "next/image";
import React from "react";

import { useLanguage } from "../../../context";
import logo from "../../../public/logo.png";
import styles from "../../../styles/componentsStyle/landing/LandingHeader.module.scss";

const LandingHeader: React.FC = () => {
  const { text } = useLanguage();
  return (
    <div className={styles.wraper} id="why">
      <div className={styles.first_gradient} />
      <div className={styles.second_gradient} />
      <div className={styles.third_gradient} />
      <div className={styles.first_background} />
      <div className={styles.woman_warrior}>
        <div className={styles.woman_shadow} />
      </div>
      <div className={styles.header}>
        <div className={styles.desktop}>
          <Image src={logo} alt="logo picture " width={296} height={280} />
        </div>
        <div className={styles.mobil}>
          <Image src={logo} alt="logo picture " width={192} height={181} />
        </div>

        <h1>
          {text[6]} <span>{text[7]}</span> {text[8]}
        </h1>
        {/* <h2>{text[8] || "All eSports fans."}</h2> */}
        <div className={styles.buttons}>
          <a
            href="https://fienta.com/talinn-gaming-summit-2022"
            className={classNames(styles.desktop, styles.item)}
          >
            {text[9] || "Buy a ticket"}
          </a>
          <a
            href="https://fienta.com/talinn-gaming-summit-2022"
            className={classNames(styles.mobil, styles.item)}
          >
            {text[9] || "Buy a ticket"}
          </a>
          <a className={styles.item} href="mailto:info@tallinngamingsummit.com">
            {" "}
            {text[10] || "Become a partner"}
          </a>
        </div>
        <h3>{text[11] || "Join us on 30 & 31 August"}</h3>
      </div>
    </div>
  );
};

export default LandingHeader;
