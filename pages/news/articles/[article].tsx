import classNames from "classnames";
import dayjs from "dayjs";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next/types";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

import styles from "../../../styles/componentsStyle/News.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import {
  FbMiniIcon,
  InMiniIcon,
  InstaMiniIcon,
} from "../../../assets/icon/News";
import { LandingFooter, Navbar } from "../../../components";
import NewsStaticContent from "../../../components/News/NewsStaticContent";
import { INewArticle, INewArticleFields } from "../../../contentful";
import client from "../../../contentfulClient/index";
import { useLanguage } from "../../../context";
import { useMediaQuery } from "../../../helpers/useMedia";
import ticket from "../../../public/News/news_ticket.png";

interface IArticle {
  data: INewArticle;
}

const Article: NextPage<IArticle> = ({ data }) => {
  const label = "news";
  const { lang, text } = useLanguage();
  const isMobile = useMediaQuery(500);
  return (
    <>
      <Head>
        <title>
          {lang !== "Eng" && data.fields.estTopic
            ? data.fields.estTopic
            : data.fields.topic}
        </title>
      </Head>
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
          <div className={styles.content}>
            <NewsStaticContent isNoTitle={isMobile} />
            <main>
              <a
                href="https://fienta.com/talinn-gaming-summit-2022"
                className={classNames(styles.ticket_block, {
                  [styles.order]: isMobile,
                })}
              >
                <Image src={ticket} layout="responsive" />
              </a>
              <div className={styles.slider}>
                <div className={styles.single_card}>
                  <div
                    className={styles.photo_new}
                    style={{
                      backgroundImage: `url("https:${
                        data.fields.newsImage?.fields.file.url as string
                      }"`,
                    }}
                  />
                  <div className={styles.text_new}>
                    <div className={styles.date}>
                      <AiOutlineCalendar />
                      <span>
                        {dayjs(data.fields.publicationDate as string).format(
                          "DD MMM, YYYY ",
                        )}
                      </span>
                    </div>
                    <div className={styles.rich_text}>
                      {data.fields.formatingText && (
                        <div className={styles.rich_text}>
                          {documentToReactComponents(
                            lang !== "Eng" && data.fields.estFormatingText
                              ? data.fields.estFormatingText
                              : data.fields.formatingText,
                          )}
                        </div>
                      )}
                    </div>
                    <div className={styles.social}>
                      <h3>{text[81] || "Share"}:</h3>
                      <div className={styles.block}>
                        <a>
                          <InstaMiniIcon />
                        </a>
                        <a>
                          <FbMiniIcon />
                        </a>
                        <a>
                          <InMiniIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <LandingFooter />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articleEntries = await client.getEntries<INewArticleFields>({
    content_type: "newArticle",
    select: "fields.slug",
  });

  return {
    paths: articleEntries.items.map((item) => {
      return {
        params: {
          article: item.fields.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.article;

  const articleEntries = await client.getEntries<INewArticleFields>({
    content_type: "newArticle",
    limit: 1,
    "fields.slug": slug,
  });
  const [article] = articleEntries.items;

  return {
    props: {
      data: article,
    },
  };
};

export default Article;
