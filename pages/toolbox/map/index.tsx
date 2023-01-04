import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { FloorFirst, FloorSecond, FloorThird } from "@/../components/Map";

import Layout from "../../../components/Layout";
import styles from "../../../styles/componentsStyle/Map.module.scss";
import { InfoText } from "../../../types";

const Map: NextPage = () => {
  const [infoText, setInfoText] = useState<InfoText | null>(null);
  const [floor, setFloor] = useState<string>("");

  useEffect(() => {
    setInfoText(null);
  }, [floor]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFloor(e.target.value);
  };
  const start = floor === "value1" || floor === "";

  useEffect(() => {
    const el = document.getElementById("map");
    if (el) el.scrollIntoView();
  }, [floor]);

  return (
    <Layout title="Event map" backHref="/toolbox/profile">
      <div className={styles.event_map}>
        {start && <FloorFirst setInfoText={setInfoText} />}
        {floor === "value2" && <FloorSecond setInfoText={setInfoText} />}
        {floor === "value3" && <FloorThird setInfoText={setInfoText} />}

        <div className={styles.select_map}>
          <select name="select" value={floor} onChange={onChange}>
            <option value="" disabled hidden>
              Search by floors
            </option>
            <option value="value1">first floor</option>
            <option value="value2">second floor</option>
            <option value="value3">third floor</option>
          </select>
        </div>
        {infoText && (
          <div className={styles.info_block}>
            <div className={styles.logo}>
              <Image src={infoText.icon} width={39} height={39} />
            </div>
            <h2>{infoText.room}</h2>
            <p>Participants: {infoText.participants}</p>
            <p>Hours: {infoText.hours}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Map;
