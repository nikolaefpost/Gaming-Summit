import { NextPage } from "next";
import React, { useState } from "react";
// import {  HiSearch } from "react-icons/hi";
import { IoMdCheckmark } from "react-icons/io";

import {
  EstonianFlagIcon,
  RussianFlagIcon,
  UsaFlagIcon,
} from "../../../assets/icon/Profile";
import Layout from "../../../components/Layout";
import styles from "../../../styles/componentsStyle/Profile.module.scss";
import { IlanguageData } from "../../../types";

const Language: NextPage = () => {
  const data: IlanguageData[] = [
    { icon: UsaFlagIcon, title: "English", isSelect: true },
    { icon: RussianFlagIcon, title: "Russian", isSelect: false },
    { icon: EstonianFlagIcon, title: "Estonian", isSelect: false },
  ];

  const [languageData, setLanguageData] = useState<IlanguageData[]>(data);
  // const [search, setSearch] = useState<string>("");
  //
  // const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setSearch(event.target.value);
  // };

  const onSelectLanguage = (title: string): void => {
    setLanguageData((prev) =>
      prev.map((item) =>
        item.title === title
          ? { ...item, isSelect: true }
          : { ...item, isSelect: false },
      ),
    );
  };
  return (
    <Layout title="Language" backHref="/toolbox/profile">
      <div className={styles.profile}>
        <div className={styles.wrapper_background}>
          <div className={styles.background_language} />
          <div className={styles.gradient} />
          <div className={styles.redSpots} />
          <div className={styles.ellipse} />
        </div>
        <div className={styles.content}>
          {/* <div className={styles.input_block_search}> */}
          {/*  <input */}
          {/*    value={search} */}
          {/*    onChange={onChange} */}
          {/*    type="text" */}
          {/*    placeholder="Search language ..." */}
          {/*  /> */}
          {/*  <HiSearch /> */}
          {/* </div> */}
          <div className={styles.language_block}>
            {languageData.map((item) => (
              <div
                className={styles.item}
                key={item.title}
                onClick={() => onSelectLanguage(item.title)}
              >
                <div className={styles.left}>
                  <item.icon />
                  <span>{item.title}</span>
                </div>
                {item.isSelect && (
                  <div className={styles.right}>
                    <IoMdCheckmark />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      sss
    </Layout>
  );
};

export default Language;
