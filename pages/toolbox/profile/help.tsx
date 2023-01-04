import { NextPage } from "next";
import React from "react";

import { FileIcon } from "../../../assets/icon/Profile";
import Layout from "../../../components/Layout";
import styles from "../../../styles/componentsStyle/Profile.module.scss";

const Help: NextPage = () => {
  const data = [
    {
      id: 0,
      title: "What do we get here in this app?",
      text: "That which doesn't kill you makes you stronger, right? Unless it almost kills you, and renders you weaker. Being strong is pretty rad though, so go ahead.",
      icon: FileIcon,
    },
    {
      id: 1,
      title: "What do we get here in this app?",
      text: "That which doesn't kill you makes you stronger, right? Unless it almost kills you, and renders you weaker. Being strong is pretty rad though, so go ahead.",
      icon: FileIcon,
    },
    {
      id: 2,
      title: "What do we get here in this app?",
      text: "That which doesn't kill you makes you stronger, right? Unless it almost kills you, and renders you weaker. Being strong is pretty rad though, so go ahead.",
      icon: FileIcon,
    },
  ];
  return (
    <Layout title="Help & Support" backHref="/toolbox/profile">
      <div className={styles.profile}>
        <div className={styles.wrapper_background}>
          <div className={styles.background_help} />
          <div className={styles.gradient} />
          <div className={styles.redSpots} />
          <div className={styles.ellipse} />
        </div>

        <div className={styles.content}>
          <div className={styles.help_block}>
            <h3>Frequent Asked Questions</h3>
            <div className={styles.item_block}>
              {data.map((item) => (
                <div key={item.id} className={styles.item}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <div className={styles.icon}>
                    <item.icon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
