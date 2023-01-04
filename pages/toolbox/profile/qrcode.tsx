import { NextPage } from "next";
import Image from "next/image";
import React from "react";

import qrCode from "@/../public/Profile/qr_code.png";

import Layout from "../../../components/Layout";
import styles from "../../../styles/componentsStyle/Profile.module.scss";

const Qrcode: NextPage = () => {
  return (
    <Layout title="My QR Code" backHref="/toolbox/profile">
      <div className={styles.profile}>
        <div className={styles.wrapper_background}>
          <div className={styles.background_qr} />
          <div className={styles.gradient} />
          <div className={styles.redSpots} />
          <div className={styles.ellipse} />
        </div>

        <div className={styles.content}>
          <div className={styles.qr_code}>
            <h2>Scan QR code</h2>
            <p>Scan the QR code and it automatically recognize it.</p>
            <div className={styles.main_img}>
              <Image src={qrCode} width={257} height={257} />
            </div>
            <h3>code number</h3>
            <div className={styles.code}>№1234</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Qrcode;
