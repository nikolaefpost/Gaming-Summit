import classNames from "classnames";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineCheck } from "react-icons/ai";
import { HiArrowNarrowLeft } from "react-icons/hi";
import * as yup from "yup";

import MailVerification from "@/../components/MailVerification";
import { yupResolver } from "@hookform/resolvers/yup";

import { emailIcon } from "../../assets/icon/Login";
import styles from "../../styles/componentsStyle/Login.module.scss";

type Inputs = {
  email: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is empty"),
});

const Registration: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<Inputs>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const [accept, setAccept] = useState(false);
  const [onModal, setOnModal] = useState(false);

  const [sendVerification, setSendVerification] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const handleSubmitVerification: SubmitHandler<Inputs> = (data) => {
    if (accept) {
      setSendVerification(true);
      // setOnModal(true);
    }
  };

  return (
    <>
      {onModal && (
        <div className={styles.modal}>
          <div className={styles.info_block}>
            <h2>{getValues().email}</h2>
            <p>
              We do not have registered mail, which means you do not have a
              ticket yet
            </p>
            <a href="https://fienta.com/talinn-gaming-summit-2022">
              Buy a ticket
            </a>
          </div>
        </div>
      )}
      <div className={styles.login}>
        <Link href="/">
          <a className={styles.back} type="button">
            <HiArrowNarrowLeft />
          </a>
        </Link>
        {!sendVerification && <div className={styles.background2} />}
        {sendVerification && !editPassword && (
          <div className={styles.background3} />
        )}
        {editPassword && <div className={styles.background4} />}
        <div className={styles.gradient} />
        {editPassword && <div className={styles.gradient2} />}
        <div className={styles.ellipse1} />
        <div className={styles.ellipse2} />
        <div className={styles.red_spots1} />
        <div className={styles.red_spots2} />
        <div className={styles.logo} />

        {!sendVerification ? (
          <form
            className={styles.check_mail}
            onSubmit={handleSubmit(handleSubmitVerification)}
          >
            <h2>Verification</h2>
            <p>
              A confirmation code will be sent to your email below, enter the
              email for the confirmation code
            </p>
            <div className={styles.input_block}>
              {errors?.email && (
                <div className={styles.error}>
                  Invalid email address{errors?.email.message}
                </div>
              )}
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <Image src={emailIcon as string} width={24} height={24} />
                </div>
                <input type="text" placeholder="Email" {...register("email")} />
              </div>
            </div>
            <div
              className={styles.block_checkboxes}
              onClick={() => setAccept(!accept)}
            >
              <div
                className={classNames(styles.checkbox, {
                  [styles.yellow]: accept,
                })}
              >
                {accept && <AiOutlineCheck />}
              </div>
              <div className={styles.title}>
                I accept all the <span>Terms and Conditions</span>
              </div>
            </div>

            <button type="submit">Send verification</button>
            <Link href="login">
              <a className={styles.login_registration}>
                {" "}
                Already have an account? <span>Log in</span>{" "}
              </a>
            </Link>
          </form>
        ) : (
          <MailVerification
            editPassword={editPassword}
            setEditPassword={setEditPassword}
          />
        )}
      </div>
    </>
  );
};

export default Registration;
