import React from 'react';
import {NextPage} from "next";
import Image from 'next/image'
import tgs from "/public/tgs.png"
import styles from "/styles/Home.module.scss"

const Tgs: NextPage = () => {
  return (
    <div className={styles.img_content}>
      <Image
        layout="intrinsic"
        src={tgs}
      />
    </div>
  );
};

export default Tgs;
