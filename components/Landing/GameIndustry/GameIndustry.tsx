import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { useLanguage } from "../../../context";
import styles from "../../../styles/componentsStyle/landing/GameIndustry.module.scss";

const GameIndustry: React.FC = () => {
  const { text } = useLanguage();
  return (
    <div className={styles.industry}>
      <div className={styles.god_of_war}>
        <div className={styles.god_of_war_shadow} />
      </div>
      <div className={styles.your_day}>{text[74] || "This is your day"}</div>
      <div className={styles.gerald}>
        <div className={styles.gerald_shadow} />
      </div>
      <div className={styles.cirilla} />
      <div className={styles.smoke} />
      <div className={styles.content}>
        <div className={styles.title}>
          {/* <p>Get to know us</p> */}
          <h2>{text[13] || "COMMUNITY"}</h2>
          <h2>{text[14] || "& Industry"}</h2>
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <h3>{text[15] || "Create, compete, Enjoy, learn, network,"}</h3>
            <p>
              {text[16] ||
                "We are honored to bring you the esports festival for the whole community. On the 30th and 31st of August, you can take part in Tallinn Gaming Summit, aimed at bringing together the Estonian esports community with world leading names to create value and enjoy games together."}
            </p>
          </div>
          {/* <div className={styles.right}> */}
          {/*  <h2>550,300</h2> */}
          {/*  <p>People register this website</p> */}
          {/*  <h2 className={styles.last}>50,000</h2> */}
          {/*  <p>Meeting with us is already waiting</p> */}
          {/* </div> */}
        </div>
        <div className={styles.take} id="program" />
        <div className={styles.program}>
          <h2>{text[17] || "EVENT PROGRAM"}</h2>
          <div className={styles.days}>
            <div className={styles.item}>
              <div className={styles.item_title1}>
                <div>{text[18] || "Tuesday 30.08"} </div>
                <a href="PDF/TGS_program_1.2.pdf">
                  {text[19] || "View All"}
                  <HiArrowNarrowRight />
                </a>
              </div>
              <div className={styles.info_block}>
                <span>11:30</span>
                <h5>{text[21] || "Nordic Esports Summit"}</h5>
              </div>
              <div className={styles.info_block}>
                <span>13:45</span>
                <h5>{text[22] || "Rocket League show-match"}</h5>
              </div>
              <div className={styles.info_block}>
                <span>15:00</span>
                <h5>{text[23] || "Dota 2 Estonian Championships final"}</h5>
              </div>
              <div className={styles.info_block}>
                <span>18:30</span>
                <h5>
                  {text[24] || "Launch of Estonian Esports Business League"}
                </h5>
              </div>
              <div className={styles.info_block}>
                <span>20:00 </span>
                <h5>{text[25] || "Official Afterparty"}</h5>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_title2}>
                <div>{text[20] || "Wednesday 31.08"}</div>
                <a href="PDF/TGS_program_1.2.pdf">
                  {text[19] || "View All"}
                  <HiArrowNarrowRight />
                </a>
              </div>
              <div className={styles.info_block}>
                <span>11:15</span>
                <h5>{text[26] || "Estonian athletes esports battle"}</h5>
              </div>
              <div className={styles.info_block}>
                <span>12:45</span>
                <h5>{text[27] || "Sim-racing showcase"}</h5>
              </div>
              <div className={styles.info_block}>
                <span>15:15</span>
                <h5>{text[28] || "Family Esports showdown"}</h5>
              </div>
              <div className={styles.info_block}>
                <span>17:00</span>
                <h5>{text[29] || "CS:GO Pro teams showmatch"}</h5>
              </div>
              <div className={styles.info_block}>
                <span>20:00 </span>
                <h5>{text[30] || "Gaming Summit Quest final"}</h5>
              </div>
            </div>
            {/* <div className={styles.buy_ticket}> */}
            {/*  <h4>Make it your gamescom!</h4> */}
            {/*  <p> */}
            {/*    Get your ticket now to the biggest gaming event worldwide. What */}
            {/*    are you waiting for? */}
            {/*  </p> */}
            {/*  <button type="button"> Buy a ticket</button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameIndustry;
