import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import instagram from "../../../assets/icon/landing/instagramIcon.svg";
import { useLanguage } from "../../../context";
import { cardImage2, cardImage4, cardImage5, cardImage1_1, cardImage3_1 } from "../../../public/CardImg";
import styles from "../../../styles/componentsStyle/landing/Speakers.module.scss";


const Speakers: NextPage = () => {
  const { text } = useLanguage();
  const data = [
    {
      id: 0,
      name: text[34] || "Vlad Marinescu",
      position: text[33] || "VP of customer",
      img: cardImage1_1,
      href: "https://www.linkedin.com/in/svmarinescu/",
    },
    {
      id: 1,
      name: text[36] || "Boban Totovski",
      position: text[35] || "IESF GENERAL SECRETARY",
      img: cardImage2,
      href: "https://www.linkedin.com/in/boban-totovski-toto-04654831/",
    },
    {
      id: 2,
      name: text[76] || "Philip Wride",
      position: text[77] || "Cheesecake Digital",
      img: cardImage3_1,
      href: "https://www.linkedin.com/in/philipwride/?originalSubdomain=ae",
    },
    {
      id: 3,
      name: "Frank Willy Djuvik",
      position: "Florø E-Sport",
      img: cardImage4,
      href: "https://www.linkedin.com/in/frank-willy-djuvik-95309b1b5/",
    },
    {
      id: 4,
      name: "Bert Klemmer",
      position: "Klemmer Consultancy",
      img: cardImage5,
      href: "https://www.linkedin.com/in/bert-klemmer-598b15111/",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.screen.width < 500);
    }
  }, []);

  const visibleItems = isMobile ? 1 : 3;
  const [card, setCard] = useState(data.slice(0, visibleItems));

  useEffect(() => {
    setCard(data.slice(0, visibleItems));
  }, [text]);
  useEffect(() => {
    setCard(data.slice(0, visibleItems));
  }, [visibleItems]);

  const transition = { duration: 1, ease: "easeInOut" };

  const [shiftIndex, setShiftIndex] = useState<number>(0);

  useEffect(() => {
    setCard(data.slice(shiftIndex, shiftIndex + visibleItems));
  }, [shiftIndex, setShiftIndex]);

  const onNext = (): void => {
    if (shiftIndex < data.length - visibleItems)
      setShiftIndex((pre) => pre + 1);
  };

  const onPrev = (): void => {
    if (shiftIndex > 0) setShiftIndex((pre) => pre - 1);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setShiftIndex(Number(e.target.value));
  };

  return (
    <div className={styles.speakers} id="people">
      <div className={styles.red_spots2} />
      <div className={styles.smoke9} />
      <div className={styles.content}>
        {/* <h5>Coming Summer 2022</h5> */}
        <div className={styles.title}>
          <div className={styles.left}>
            <div>{text[31] || "meet the"}</div>
            <div>{text[32] || "speakers"}</div>
          </div>
          {/* <div className={styles.right}> */}
          {/*  <div>Athletes club</div> */}
          {/*  <div> */}
          {/*    Gaming */}
          {/*    <HiArrowNarrowRight /> */}
          {/*  </div> */}
          {/* </div> */}
        </div>

        <div className={styles.slider}>
          <AnimatePresence>
            {card.map((item) => (
              <motion.div
                key={item.id}
                className={styles.card}
                initial={{ opacity: 0, left: -300 }}
                animate={{ opacity: 1, left: 0 }}
                transition={transition}
              >
                {item.img ? (
                  <div className={styles.content_card}>
                    <Image
                      src={item.img}
                      width={400}
                      height={556}
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <a href={item.href}>
                      <Image
                        src={instagram as string}
                        width={46}
                        height={46}
                        objectFit="cover"
                      />
                    </a>

                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.position}>{item.position}</div>
                  </div>
                ) : (
                  <div className={styles.empty_card} key={item.id}>
                    <div>{text[37] || "MORE SPEAKERS ANNOUNCED SOON"}</div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className={styles.slider_control}>
          <div className={styles.buttons}>
            <button type="button" onClick={onPrev}>
              <IoIosArrowBack />
            </button>
            <button type="button" onClick={onNext}>
              <IoIosArrowForward />
            </button>
          </div>

          <div className={styles.input_line}>
            <input
              type="range"
              min="0"
              max={data.length - visibleItems}
              value={shiftIndex}
              className={styles.range}
              id="myRange"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
