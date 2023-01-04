import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";

import { INewsSlider } from "@/../types";

import { useLanguage } from "../../context";
import styles from "../../styles/componentsStyle/News.module.scss";

const NewsSlider: React.FC<INewsSlider> = ({ slides }) => {
  const { lang, text } = useLanguage();
  const transition = { duration: 1, ease: "easeInOut" };
  return (
    <AnimatePresence>
      {slides.map((item) => (
        <motion.div
          className={styles.card}
          key={item.fields.slug}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition}
        >
          <div
            className={styles.photo}
            style={{
              backgroundImage: `url("https:${
                item.fields.newsImage?.fields.file.url as string
              }"`,
            }}
          >
            {/* <Image width={453} height={283} src={`url("http:${item.fields.newsImage?.fields.file.url}"`} /> */}
          </div>
          <div className={styles.text}>
            <div className={styles.date}>
              <AiOutlineCalendar />
              <span>
                {dayjs(item.fields.publicationDate as string).format(
                  "DD MMM, YYYY ",
                )}
              </span>
            </div>
            <h2>
              {lang !== "Eng" && item.fields.estTopic
                ? item.fields.estTopic
                : item.fields.topic}
            </h2>
            <div className={styles.short}>
              <p>
                {lang !== "Eng" && item.fields.estContent
                  ? item.fields.estContent
                  : item.fields.content}
              </p>
            </div>
            <Link href={`/news/articles/${item.fields.slug as string}`}>
              <a className={styles.read_more}>
                {text[80] || "Read More"}
                <HiArrowNarrowRight />
              </a>
            </Link>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default NewsSlider;
