import classNames from "classnames";
import className from "classnames";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import { NewsSlider } from "@/../components/News";

import { LandingFooter, Navbar } from "../../components";
import NewsStaticContent from "../../components/News/NewsStaticContent";
import { INewArticle, INewArticleFields } from "../../contentful";
import client from "../../contentfulClient/index";
import { createArray, useMediaQuery } from "../../helpers/useMedia";
import ticket from "../../public/News/news_ticket.png";
import styles from "../../styles/componentsStyle/News.module.scss";

interface IBlog {
  blogs: INewArticle[];
}

const News: NextPage<IBlog> = ({ blogs }) => {
  const isMobile = useMediaQuery(500);
  const visibleItems = isMobile ? 1 : 6;
  const [shiftIndex, setShiftIndex] = useState<number>(0);
  const [slides, setSlides] = useState<INewArticle[]>(
    blogs.slice(0, visibleItems),
  );
  useEffect(() => {
    setSlides(
      blogs.slice(
        shiftIndex * visibleItems,
        shiftIndex * visibleItems + visibleItems,
      ),
    );
  }, [shiftIndex, setShiftIndex, visibleItems]);

  const onNext = (): void => {
    if (shiftIndex * visibleItems < blogs.length - visibleItems)
      setShiftIndex((prev) => prev + 1);
  };

  const onPrev = (): void => {
    if (shiftIndex > 0) setShiftIndex((prev) => prev - 1);
  };

  const totalPagination1 = useMemo(
    () => createArray(Math.ceil(blogs.length / visibleItems)),
    [visibleItems, blogs],
  );

  const totalPagination2 = [-2, -1, 0, 1, 2];
  const label = "news";
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_red_spots} />
      <div className={styles.right_red_spots} />
      <div className={styles.red_shadow1} />
      <div className={styles.red_shadow2} />
      <div className={styles.red_shadow3} />
      <div className={styles.top_right_smog} />
      <div className={styles.center_smog} />
      <div className={styles.center_smog2} />
      <div className={styles.bottom_right_smog} />
      <div className={styles.bottom_center_smog1} />
      <div className={styles.bottom_center_smog2} />

      <Navbar label={label} />

      <div className={styles.news}>
        <div className={styles.red_shadow2} />
        <div className={styles.content}>
          <NewsStaticContent />
          <main>
            <a
              href="https://fienta.com/talinn-gaming-summit-2022"
              className={styles.ticket_block}
            >
              <Image src={ticket} layout="responsive" />
            </a>
            <div className={styles.slider}>
              <NewsSlider slides={slides} />
            </div>
          </main>
          <div className={styles.slider_control}>
            <button
              type="button"
              className={styles.slider_item}
              onClick={onPrev}
            >
              <MdNavigateBefore />
            </button>
            {totalPagination1.map((item, index) => (
              <button
                key={item}
                type="button"
                className={classNames(styles.slider_item, {
                  [styles.active_item]: index === shiftIndex,
                })}
                onClick={() => setShiftIndex(index)}
              >
                {item + 1}
              </button>
            ))}
            <button
              type="button"
              className={styles.slider_item}
              onClick={onNext}
              disabled={
                shiftIndex * visibleItems >= blogs.length - visibleItems
              }
            >
              <MdNavigateNext />
            </button>
          </div>
          <div className={styles.slider_control_mobile}>
            {totalPagination2.map(
              (item) =>
                item + shiftIndex >= 0 &&
                item + shiftIndex < blogs.length && (
                  <div
                    className={className(styles.items, {
                      [styles.active]: item === 0,
                    })}
                    key={item}
                    onClick={() => setShiftIndex((pre) => pre + item)}
                  />
                ),
            )}
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client.getEntries<INewArticleFields>({
    content_type: "newArticle",
    // limit: 2,
  });

  return {
    props: {
      blogs: blogs.items,
    },
  };
};

export default News;
