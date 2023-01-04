import React from "react";

import { useLanguage } from "../../../context";
import styles from "../../../styles/componentsStyle/landing/PlacePartners.module.scss";

const PlacePartners: React.FC = () => {
  const { text } = useLanguage();
  return (
    <div className={styles.place_partners}>
      <div className={styles.smoke4} />
      <div className={styles.smoke5} />
      <div className={styles.smoke6} />
      {/* <div className={styles.smoke7} /> */}
      <div className={styles.smoke8} />
      <div className={styles.smoke9} />
      <div className={styles.meet_team}>{text[55] || "HISTORY"}</div>
      <div className={styles.grand_event}>{text[55] || "HISTORY"}</div>
      <div className={styles.place} />
      <div className={styles.assassin}>
        <div className={styles.shadow} />
      </div>
      <div className={styles.content}>
        <span>{text[57] || "This is Tallinn"}</span>
        <h2>{text[58] || "KULTUURI "}</h2>
        <h3>{text[59] || " KATEL"}</h3>
        <p>
          {text[60] ||
            "The Creative Hub is one of the most unique creative and event spaces in Northern Europe."}
          <br />
          <br />
          {text[61] ||
            "The Creative Hub is located in the heart of Tallinn. It’s easy to get here by any means of transport and hotels are within walking distance."}
          <br />
          <br />
          {text[62] ||
            "The building of the Creative Hub was completed as Tallinn City Central Power Station in 1913. After a long hiatus, the stunning industrial complex was re-opened in 2015 as a renovated universal creative and event centre."}
        </p>

        <div className={styles.enjoy}>
          <h2>
            {text[63] || "Come enjoy the"}
            <br />
            <span> {text[64] || " event"}</span> {text[65] || "with us"}
          </h2>
          <p>
            {text[66] ||
              "Want to present your game, showcase your product or have ambitions in the esports sector? "}
          </p>
          <a href="mailto:info@tallinngamingsummit.com">
            {text[67] || "Get in touch"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlacePartners;
