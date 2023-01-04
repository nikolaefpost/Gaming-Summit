import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { useLanguage } from "../../../context";
import { event1, event3 } from "../../../public/Events";
import styles from "../../../styles/componentsStyle/landing/Remember.module.scss";

const Remember: React.FC = () => {
  const { text } = useLanguage();
  const events = [
    {
      id: 0,
      img: event1,
      game: text[47] || "DotA 2",
      title: text[48] || "Estonian championships FINAL",
      description:
        text[51] ||
        "Tallinn Gaming Summit 2022 will be host to the live final of Dota 2 Estonian Championships, where the winning team will qualify for European Championships in Dota 2, taking place in Tirana, Albania.",
      href: "https://e-sports.ee/dota-2-eesti-kvalifikatsioon/",
    },
    {
      id: 1,
      img: event3,
      game: "YOUR",
      title: text[54] || "Game presentation",
      description:
        text[56] ||
        "We are offering a platform for game developers to  share their creations directly with the esports sector, whether you are an indie developer or a triple A studio executive.",
      href: "mailto:info@tallinngamingsummit.com",
    },
  ];
  let screenWidth: number;
  if (typeof window !== "undefined") {
    screenWidth = window.screen.width;
  }
  const desktopBlockWidth = 920;
  const desktopFullWidth = events.length * desktopBlockWidth + 23;

  const [shiftWidth, setShiftWidth] = useState<number>(0);
  const [shiftIndex, setShiftIndex] = useState<number>(0);

  const onNext = (): void => {
    if (desktopFullWidth + shiftWidth >= screenWidth) {
      setShiftWidth((pre) => pre - desktopBlockWidth);
      setShiftIndex((pre) => pre + 1);
    }
  };

  const onPrev = (): void => {
    if (shiftIndex > 0) {
      setShiftWidth((pre) => pre + desktopBlockWidth);
      setShiftIndex((pre) => pre - 1);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setShiftIndex(Number(e.target.value));
  };

  useEffect(() => {
    setShiftWidth(-shiftIndex * desktopBlockWidth);
  }, [shiftIndex, setShiftIndex]);
  return (
    <div className={styles.remember} id="about">
      <div className={styles.red_spots3} />
      <div className={styles.smoke3} />
      <div className={styles.map_events}>{text[44] || "EMOTIONS"}</div>
      <div className={styles.title}>
        {/* <span>The Event map</span> */}
        <h2>
          {text[45] || "Event"} <span>{text[46] || "Highlights"}</span>
        </h2>
      </div>
      <div className={styles.slider}>
        <div
          className={styles.shift_block}
          style={{ left: shiftWidth, transition: `all 1s ease-out` }}
        >
          {events.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.photo_desktop}>
                <Image
                  src={item.img}
                  width={920}
                  height={611}
                  objectFit="cover"
                />
              </div>
              <div className={styles.photo_mobil}>
                <Image
                  src={item.img}
                  width={337}
                  height={220}
                  objectFit="cover"
                />
              </div>

              <div className={styles.text}>
                <div className={styles.game}>{item.game}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.href}>Participate</a>
              </div>
            </div>
          ))}
        </div>
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

        {/* <div className={styles.line}> */}
        {/*  <div className={styles.move} style={{ left: shiftIndex * moveWidth, transition: `all 1s ease-out`}}/> */}
        {/*  <div className={styles.move_mobil} style={{ left: shiftIndex * moveWidth, transition: `all 1s ease-out`}}/> */}
        {/* </div> */}

        <div className={styles.input_line}>
          <input
            type="range"
            min="0"
            max={events.length - 1}
            value={shiftIndex}
            className={styles.range}
            id="myRange"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Remember;
