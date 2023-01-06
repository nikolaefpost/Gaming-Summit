import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { img1, img2 } from "../../../public/ProgramRoom";
import styles from "../../../styles/componentsStyle/landing/ProgramRoom.module.scss";

const ProgramRoom = () => {
  const programData = [
    {
      id: 0,
      image: img1,
      room: "Katelde Saal",
      desc: "Industriaalne ruumikogemus, mis on lummanud oma kordumatuses publikut ja esinejaid, maailmanimega muusikutest kuni Euroopa tipp-poliitikuteni. Katlad on kustunud nüüd toodab elektrit ruum ise.",
    },
    {
      id: 0,
      image: img2,
      room: "Raamatukogu",
      desc: "See ei erine praktiliselt ühestki teisest raamatukogust, mis asub teiste haridusasutuste seintes. Kas see, et raamatud seal on salvestatud mõned teised. Raamatukogus on lugemissaal, kus mängijad valmistavad ette oma kodutööd, kirjutades erinevatest teemadest välja vajalikud tsitaadid.",
    },
  ];

  const [data, setData] = useState(programData[0]);
  const [count, setCount] = useState(0);

  const onPrev = (): void => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const onNext = (): void => {
    if (count < programData.length - 1) setCount((prev) => prev + 1);
  };

  useEffect(() => {
    setData(programData[count]);
  }, [count]);

  return (
    <div className={styles.program}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>
            ÜRITUSE <span>PROGRAMM</span> ruumide kaupa
          </h2>
          <button type="button" className={styles.more}>
            See more
          </button>
        </div>
        <div className={styles.slider}>
          <div className={styles.card}>
            <div className={styles.img_block}>
              <Image
                layout="fill"
                height={541}
                objectFit="cover"
                src={data.image}
              />
            </div>
            <div className={styles.text_block}>
              <div className={styles.location}>
                <span>Tallinn</span>
                <span>Koltuurikatel</span>
                <span>2022</span>
              </div>
              <h3>{data.room}</h3>
              <p>{data.desc}</p>
              <a href="PDF/TGS_program_1.2.pdf" className={styles.view}>
                View Program <FiArrowUpRight />
              </a>
            </div>
            <div className={styles.left_arrow} onClick={onPrev}>
              <FiChevronLeft />
            </div>
            <div className={styles.right_arrow} onClick={onNext}>
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramRoom;
