import { GetStaticProps, NextPage } from "next";
import React from "react";

import {
  GameIndustry,
  LandingFooter,
  LandingHeader,
  LatestBlog,
  Navbar,
  PlacePartners,
  ProgramRoom,
  Remember,
  Speakers,
  Tickets,
} from "../components";
import { ILatestBlog, ILatestBlogFields } from "../contentful";
import client from "../contentfulClient/index";
import { useLanguage } from "../context";
import { useScroll } from "../helpers/useMedia";
import styles from "../styles/Home.module.scss";

interface IHome {
  blogs: ILatestBlog[];
}

const Home: NextPage<IHome> = ({ blogs }) => {
  const { text } = useLanguage();
  const label = useScroll("why");

  return (
    <div className={styles.content}>
      <div className={styles.ellipse1} />
      <div className={styles.ellipse2} />
      <div className={styles.red_spots} />
      <div className={styles.white_shadow} />
      <div className={styles.anything_text}>{text[12] || "1st Edition"}</div>
      <div className={styles.smoke2} />
      <div className={styles.smoke3} />
      <div className={styles.smoke7} />
      <div className={styles.smoke8} />
      <div className={styles.smoke9} />
      <div className={styles.smoke10} />
      <div className={styles.red_spots_all1} />

      <Navbar label={label} />
      <LandingHeader />
      <GameIndustry />
      <ProgramRoom />
      <Speakers />
      <Tickets />
      <LatestBlog blogs={undefined} />
      <Remember />
      <PlacePartners />
      <LandingFooter />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client.getEntries<ILatestBlogFields>({
    content_type: "latestBlog",
    // limit: 2,
  });

  return {
    props: {
      blogs: blogs.items,
    },
  };
};

export default Home;
