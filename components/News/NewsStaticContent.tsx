import Link from "next/link";
import React from "react";

import { useLanguage } from "../../context";
import styles from "../../styles/componentsStyle/News.module.scss";

interface INewsStaticContent {
  isNoTitle?: boolean;
}

const NewsStaticContent: React.FC<INewsStaticContent> = ({ isNoTitle }) => {
  const { text } = useLanguage();
  const newsLink = "/news";
  return (
    <header className={styles.title}>
      <div className={styles.nav}>
        <Link href="/">
          <a>{text[79] || "Home"}</a>
        </Link>
        <span>{">"}</span>
        <Link href={newsLink}>
          <a>{text[78] || "News"}</a>
        </Link>
      </div>
      {!isNoTitle && (
        <>
          <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </>
      )}
    </header>
  );
};

export default NewsStaticContent;
