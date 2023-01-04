import classNames from "classnames";
import { omit } from "lodash";
import { NextPage } from "next";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FiCamera } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";

import { EditIcon, NoImageIcon } from "@/../assets/icon/Profile";
import Layout from "@/../components/Layout";

import {
  useSingleImage,
  useValidateInputEdit,
  validateMail,
  validateName,
} from "../../../helpers/useInput";
import styles from "../../../styles/componentsStyle/Profile.module.scss";

const Edit: NextPage = () => {
  const logoRef = useRef<HTMLInputElement>(null);
  const logo = useSingleImage(logoRef);
  const [isMale, setIsMale] = useState(true);

  const name = useValidateInputEdit("", validateName);
  const email = useValidateInputEdit("", validateMail);
  const nickName = useValidateInputEdit("", validateName);

  const onMale = (): void => {
    setIsMale(true);
  };

  const onFemale = (): void => {
    setIsMale(false);
  };

  return (
    <div>
      <Layout title="Edit Profile" backHref="/toolbox/profile">
        <div className={styles.profile}>
          <div className={styles.wrapper_background}>
            <div className={styles.background_edit} />
            <div className={styles.gradient} />
            <div className={styles.redSpots} />
            <div className={styles.ellipse} />
          </div>
          <form className={styles.content}>
            <div className={styles.photo_block}>
              <div className={styles.photo}>
                {logo.image ? (
                  <Image
                    src={logo.image}
                    width={80}
                    height={80}
                    objectFit="cover"
                    objectPosition="0 0"
                  />
                ) : (
                  <NoImageIcon />
                )}
                <div className={styles.edit} onClick={logo.onClick}>
                  <input
                    type="file"
                    ref={logoRef}
                    className={styles.file}
                    onChange={logo.onChange}
                  />
                  <EditIcon />
                </div>
              </div>
              <div className={styles.text_upload_img}>
                <div className={styles.upload} onClick={logo.onClick}>
                  <FiCamera />
                  Upload Photo
                </div>
              </div>
            </div>
            <div className={styles.edit_input_block}>
              <h3>Name</h3>
              <input type="text" {...omit(name, "isValid", "customStyle")} />
              {name.isValid && <IoMdCheckmark />}
            </div>
            <div className={styles.wrapper_gender}>
              <div className={styles.gender}>
                <div className={styles.label}>Gender</div>
                <div className={styles.value}>
                  <div
                    className={classNames(styles.sex, {
                      [styles.active]: isMale,
                    })}
                    onClick={onMale}
                  >
                    <div className={styles.circle} />
                    <span>Male</span>
                  </div>
                  <div
                    className={classNames(styles.sex, {
                      [styles.active]: !isMale,
                    })}
                    onClick={onFemale}
                  >
                    <div className={styles.circle} />
                    <span>Female</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.edit_input_block}>
              <h3>Email</h3>
              <input type="email" {...omit(email, "isValid", "customStyle")} />
              {email.isValid && <IoMdCheckmark />}
            </div>
            <div className={styles.edit_input_block}>
              <h3>Nickname</h3>
              <input
                type="text"
                {...omit(nickName, "isValid", "customStyle")}
              />
              {nickName.isValid && <IoMdCheckmark />}
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Edit;
