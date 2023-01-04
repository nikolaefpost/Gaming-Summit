import classNames from "classnames";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

// import { useSingleImage } from "@/../../../helpers/useInput";
import {
  EditIcon,
  HelpIcon,
  LanguageIcon,
  LogOutIcon,
  NoImageIcon,
  PointIcon,
  PrivacyIcon,
} from "@/../assets/icon/Profile";
import { useSingleImage } from "@/../helpers/useInput";
import styles from "@/../styles/componentsStyle/Profile.module.scss";

import Layout from "../../../components/Layout";

const Profile: NextPage = () => {
  const male = true;
  const edit = "profile/edit";

  const setting = [
    {
      title: "General",
      links: [
        { href: "profile/language", name: "Language", icon: LanguageIcon },
        { href: "profile/privacy", name: "Privacy Policy", icon: PrivacyIcon },
      ],
    },
    {
      title: "Other",
      links: [
        { href: "profile/help", name: "Help & Support", icon: HelpIcon },
        { href: "/auth/registration", name: "Log Out", icon: LogOutIcon },
      ],
    },
  ];

  const logoRef = useRef<HTMLInputElement>(null);
  const logo = useSingleImage(logoRef);

  return (
    <div>
      <Layout title="Profile" backHref="/">
        <div className={styles.profile}>
          <div className={styles.wrapper_background}>
            <div className={styles.background1} />
            <div className={styles.gradient} />
            <div className={styles.ellipse} />
          </div>

          <div className={styles.content}>
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
              <div className={styles.text}>
                <div className={styles.left}>
                  <h2>Christian Thornton</h2>
                  <div className={styles.point}>
                    <PointIcon />
                    <span>23 Point</span>
                  </div>
                </div>
                <Link href={edit}>
                  <a className={styles.right}>
                    <IoIosArrowForward />
                  </a>
                </Link>
              </div>
            </div>

            <div className={styles.personal_data}>
              <div className={styles.name}>
                <div className={styles.label}>Name</div>
                <div className={styles.data}>Christian Thornton</div>
              </div>
              <div className={styles.gender}>
                <div className={styles.label}>Gender</div>
                <div className={styles.value}>
                  <div
                    className={classNames(styles.sex, {
                      [styles.active]: male,
                    })}
                  >
                    <div className={styles.circle} />
                    <span>Male</span>
                  </div>
                  <div
                    className={classNames(styles.sex, {
                      [styles.active]: !male,
                    })}
                  >
                    <div className={styles.circle} />
                    <span>Female</span>
                  </div>
                </div>
              </div>
              <div className={styles.name}>
                <div className={styles.label}>Nickname</div>
                <div className={styles.data}>Dark</div>
              </div>
              <div className={styles.name}>
                <div className={styles.label}>Email</div>
                <div className={styles.data}>Christianthornton@gmai.com</div>
              </div>
            </div>

            {setting.map((group) => (
              <div className={styles.setting} key={group.title}>
                <h2>{group.title}</h2>
                {group.links.map((link) => (
                  <Link href={link.href} key={link.href} replace>
                    <a className={styles.setting_item}>
                      <div className={styles.left}>
                        <div>
                          <link.icon />
                        </div>
                        <span>{link.name}</span>
                      </div>
                      <div className={styles.right}>
                        <IoIosArrowForward />
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Profile;
