import classNames from "classnames";
import { NextPage } from "next";
import React, { useState } from "react";

import Layout from "../../../components/Layout";
import styles from "../../../styles/componentsStyle/Rating.module.scss";

const Program: NextPage = () => {
  const [day, setDay] = useState<number>(1);

  return (
    <Layout title="Event program" backHref="/toolbox/profile">
      <div className={styles.rating}>
        <div className={styles.wrapper_background}>
          <div className={styles.background_program} />
          <div className={styles.gradient} />
          <div className={styles.redSpots} />
          <div className={styles.ellipse} />
        </div>

        <div className={styles.content}>
          <div className={styles.program}>
            <h2>Choose Time</h2>
            <div className={styles.days}>
              <div
                className={classNames(styles.item_day, {
                  [styles.active_day]: day === 1,
                })}
                onClick={() => setDay(1)}
              >
                <div className={styles.left}>
                  <span>Tue</span>
                  <span>30</span>
                </div>
                <div className={styles.right}>Aug 2022</div>
              </div>
              <div
                className={classNames(styles.item_day, {
                  [styles.active_day]: day === 2,
                })}
                onClick={() => setDay(2)}
              >
                <div className={styles.left}>
                  <span>Wed</span>
                  <span>31</span>
                </div>
                <div className={styles.right}>Aug 2022</div>
              </div>
            </div>
            {day === 1 && (
              <div className={styles.timetable}>
                <div className={styles.item_time}>
                  <h3>11:30</h3>
                  <p>Nordic Esports Summit</p>
                </div>
                <div className={styles.item_time}>
                  <h3>13:45</h3>
                  <p>Rocket League show-match</p>
                </div>
                <div className={styles.item_time}>
                  <h3>15:00</h3>
                  <p>Dota 2 Estonian Championships final</p>
                </div>
                <div className={styles.item_time}>
                  <h3>18:30</h3>
                  <p>Launch of Estonian Esports Business League</p>
                </div>
                <div className={styles.item_time}>
                  <h3>20:00</h3>
                  <p>Official Afterparty</p>
                </div>
              </div>
            )}
            {day === 2 && (
              <div className={styles.timetable}>
                <div className={styles.item_time}>
                  <h3>11:15</h3>
                  <p>Estonian athletes esports battle</p>
                </div>
                <div className={styles.item_time}>
                  <h3>12:45</h3>
                  <p>Sim-racing showcase</p>
                </div>
                <div className={styles.item_time}>
                  <h3>15:15</h3>
                  <p>Family Esports showdown</p>
                </div>
                <div className={styles.item_time}>
                  <h3>17:00</h3>
                  <p>CS:GO Pro teams showmatch</p>
                </div>
                <div className={styles.item_time}>
                  <h3>20:00</h3>
                  <p>Gaming Summit Quest final</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Program;
