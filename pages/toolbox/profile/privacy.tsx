import { NextPage } from "next";
import React from "react";

import Layout from "@/../components/Layout";

import styles from "../../../styles/componentsStyle/Profile.module.scss";

const Privacy: NextPage = () => {
  const data = [
    {
      title: "Terms",
      text: "A terms and conditions agreement outlines the website administrator’s rules regarding user behavior, and provides information about the actions the website administrator can and will perform. Your terms and conditions text is a contract between your website and its users. In the event of a legal dispute, arbitrators will look to this agreement to determine whether each party acted within their rights",
    },
    {
      title: "User License",
      text: "A terms and conditions agreement outlines the website administrator’s rules regarding user behavior, and provides information about the actions the website administrator can and will perform. Your terms and conditions text is a contract between your website and its users. In the event of a legal dispute, arbitrators will look to this agreement to determine whether each party acted within their rights",
    },
    {
      title: "Our Privacy Policy",
      text: "A terms and conditions agreement outlines the website administrator’s rules regarding user behavior, and provides information about the actions the website administrator can and will perform. Your terms and conditions text is a contract between your website and its users. In the event of a legal dispute, arbitrators will look to this agreement to determine whether each party acted within their rights",
    },
  ];

  return (
    <Layout title="Terms of Service" backHref="/toolbox/profile">
      <div className={styles.profile}>
        <div className={styles.wrapper_background}>
          <div className={styles.background_privacy} />
          <div className={styles.gradient} />
          <div className={styles.redSpots} />
          <div className={styles.ellipse} />
        </div>

        <div className={styles.content}>
          <div className={styles.privacy_block}>
            {data.map((item) => (
              <div key={item.title} className={styles.item}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      sss
    </Layout>
  );
};

export default Privacy;
