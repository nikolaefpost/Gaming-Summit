import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { ILatestBlog } from "../../../contentful";
import { useLanguage } from "../../../context";
import styles from "../../../styles/componentsStyle/landing/LatestBlog.module.scss";

interface IBlog {
  blogs?: ILatestBlog[];
}

const LatestBlog: React.FC<IBlog> = ({ blogs }) => {
  const { lang, text } = useLanguage();
  let screenWidth: number;
  if (typeof window !== "undefined") {
    screenWidth = window.screen.width;
  }
  const desktopBlockWidth = 402;
  const desktopFullWidth = blogs ? blogs.length * desktopBlockWidth - 39 : 0;

  const [shiftWidth, setShiftWidth] = useState<number>(0);
  const [shiftIndex, setShiftIndex] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    if (blogs)
      setStep(
        Math.ceil(
          (blogs.length * desktopBlockWidth - 39 - screenWidth) /
            desktopBlockWidth,
        ),
      );
  }, []);

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

  if (!blogs) return null;

  return (
    <div className={styles.latest_blog}>
      <div className={styles.title}>
        <h2>{text[82] || "Latest Blog Post"}</h2>
        <p>{text[83] || "Read our latest blog post and learn more."}</p>
      </div>
      <div className={styles.slider}>
        <div
          className={styles.shift_block}
          style={{ left: shiftWidth, transition: `all 1s ease-out` }}
        >
          {blogs?.map((item) => (
            <a
              href={item.fields.resourceLink}
              className={styles.card}
              key={item.fields.title}
            >
              <div className={styles.photo_desktop}>
                {item.fields.mainPhoto ? (
                  <Image
                    src={`https://${item.fields.mainPhoto.fields.file.url}`}
                    width={363}
                    height={530}
                    objectFit="cover"
                  />
                ) : (
                  <div className={styles.empty_text}>
                    Open Website
                    <FiArrowUpRight />
                  </div>
                )}
              </div>
              <p className={styles.text}>{item.fields.title}</p>
            </a>
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
        <div className={styles.input_line}>
          <input
            type="range"
            min="0"
            max={step}
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

export default LatestBlog;
