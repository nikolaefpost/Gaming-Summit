import React from "react";

import { IFloor, InfoText } from "@/../types";

import { Floor3, PointIcon } from "../../assets/icon/map";
import { dota2 } from "../../public/Map";
import styles from "../../styles/componentsStyle/Map.module.scss";

const FloorFirst: React.FC<IFloor> = ({ setInfoText }) => {
  const pointFlor: InfoText[] = [
    {
      id: 0,
      room: "Room Dota 2",
      participants: 56,
      hours: "08:00 - 21:00",
      icon: dota2,
    },
    {
      id: 1,
      room: "Room CSGO",
      participants: 156,
      hours: "08:00 - 21:00",
      icon: dota2,
    },
  ];

  const onInfoText = (id: number): void => {
    setInfoText(pointFlor.find((item) => item.id === id) as InfoText);
  };

  return (
    <div className={styles.floor}>
      <div className={styles.wrapper_map}>
        <Floor3 className={styles.main} />
      </div>

      <div className={styles.redSpots} />
      <div className={styles.map_gradient} />
      <PointIcon className={styles.center} />
      <span onClick={() => onInfoText(0)}>
        <PointIcon className={styles.room1} />
      </span>
      <span onClick={() => onInfoText(1)}>
        <PointIcon className={styles.room2} />
      </span>
    </div>
  );
};

export default FloorFirst;
