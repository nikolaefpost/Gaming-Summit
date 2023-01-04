import classNames from "classnames";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { cardImage1, cardImage2, cardImage3 } from "@/../public/CardImg";

import RatingIcon from "../../../assets/icon/Rating/RatingIcon";
import Layout from "../../../components/Layout";
import styles from "../../../styles/componentsStyle/Rating.module.scss";
import { IRatingList } from "../../../types";

const ratingList: IRatingList[] = [
  {
    id: 1,
    image: cardImage1,
    name: "Eleanor Hopkins",
    rating: 3421,
    isSelect: false,
  },
  {
    id: 2,
    image: cardImage2,
    name: "Eva Toddyy",
    rating: 212,
    isSelect: false,
  },
  {
    id: 3,
    image: cardImage3,
    name: "Mike Coleman",
    rating: 199,
    isSelect: false,
  },
  {
    id: 4,
    image: cardImage1,
    name: "Russell Casey",
    rating: 78,
    isSelect: false,
  },
  { id: 5, image: cardImage2, name: "Adoddbe", rating: 69, isSelect: false },
  {
    id: 6,
    image: cardImage1,
    name: "Eleano Hopkins",
    rating: 3456,
    isSelect: false,
  },
  { id: 7, image: cardImage2, name: "Eva Todff", rating: 219, isSelect: false },
  {
    id: 8,
    image: cardImage3,
    name: "Midd Coleman",
    rating: 157,
    isSelect: false,
  },
  {
    id: 9,
    image: cardImage1,
    name: "Russell Casey",
    rating: 71,
    isSelect: false,
  },
  { id: 10, image: cardImage2, name: "Adobe", rating: 63, isSelect: false },
  {
    id: 11,
    image: cardImage3,
    name: "Christian Thornton",
    rating: 21,
    isSelect: false,
  },
  { id: 12, image: cardImage1, name: "Eva Todd", rating: 12, isSelect: false },
  { id: 13, image: cardImage2, name: "Mike Cole", rating: 19, isSelect: false },
  { id: 14, image: cardImage3, name: "Joe Biden", rating: 12, isSelect: false },
];

const Rating: NextPage = () => {
  const user = {
    id: 11,
    image: cardImage3,
    name: "Christian Thornton",
    rating: 21,
    isSelect: false,
  };

  const [isAll, setIsAll] = useState(true);
  const [list, setList] = useState<IRatingList[] | null>();

  useEffect(() => {
    setList(ratingList.sort((a, b) => (a.rating >= b.rating ? -1 : 1)));
  }, []);

  return (
    <Layout title="Rating table" backHref="/toolbox/profile">
      <div className={styles.rating}>
        <div className={styles.wrapper_background}>
          <div className={styles.background} />
          <div className={styles.gradient} />
          <div className={styles.redSpots} />
          <div className={styles.ellipse} />
        </div>

        <div className={styles.content}>
          <div className={styles.rating_select}>
            <div
              className={classNames(styles.options, {
                [styles.active_options]: isAll,
              })}
              onClick={() => setIsAll(true)}
            >
              All
            </div>
            <a
              href={`#${user.id}`}
              className={classNames(styles.options, {
                [styles.active_options]: !isAll,
              })}
              onClick={() => setIsAll(false)}
            >
              My rating
            </a>
          </div>
          <Link href="/">
            <button type="button" className={styles.rules}>
              Rules and regulations for the game
              <HiArrowNarrowRight />
            </button>
          </Link>
          <div className={styles.rating_list}>
            <div className={styles.title}>
              <span># Team</span>
              <span>Points</span>
            </div>
            <div className={styles.list}>
              {list?.map((item, index) => (
                <div
                  key={item.id}
                  className={classNames(styles.item, {
                    [styles.active_item]: item.name === user.name && !isAll,
                  })}
                  id={`${item.id}`}
                >
                  <div className={styles.left}>
                    <span className={styles.index}>{index + 1}</span>
                    <div className={styles.images}>
                      <Image
                        className="rounded-full"
                        src={item.image}
                        width={29}
                        height={29}
                        objectFit="cover"
                      />
                    </div>

                    <span className={styles.name}>{item.name}</span>
                  </div>
                  <div className={styles.right}>
                    <RatingIcon />
                    {item.rating}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rating;
