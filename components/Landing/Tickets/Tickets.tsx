import React from "react";

import { useLanguage } from "../../../context";
import styles from "../../../styles/componentsStyle/landing/Tickets.module.scss";

const Tickets: React.FC = () => {
  const { text } = useLanguage();
  const tickets = [
    { id: 0, title: text[40] || "Children", coast: 20 },
    { id: 1, title: text[41] || "Regular", coast: 30 },
    { id: 2, title: text[42] || "Fan", coast: 50 },
  ];

  return (
    <div className={styles.tickets} id="tickets">
      <div className={styles.red_spots2} />
      <div className={styles.smoke2} />
      <div className={styles.content}>
        <div className={styles.green} />
        {/* <div className={styles.green_ground} /> */}
        <div className={styles.red} />
        <div className={styles.yellow} />
        <div className={styles.tickets_img} />
        <h2>{text[38] || "Tickets"}</h2>
        {/* <h2>for</h2> */}
        {/* <h2 className={styles.last}>visitors</h2> */}
        <p>
          {text[39] ||
            "We have three types of tickets: children up to 14 years of age, regular ticket and fan ticket, which includes a T-shirt with event design."}
        </p>
        <div className={styles.tickets_block}>
          {tickets.map((item) => (
            <div className={styles.item} key={item.id}>
              <span>{item.title}</span>
              <span>{item.coast} €</span>
              <a href="https://fienta.com/talinn-gaming-summit-2022">
                {text[43] || "Buy now"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
