import classNames from "classnames";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiArrowNarrowLeft } from "react-icons/hi";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { emailIcon, hideIcon, passwordIcon } from "../../assets/icon/Login";
import styles from "../../styles/componentsStyle/Login.module.scss";

type Inputs = {
  Email: string;
  Password: string;
};

const schema = yup
  .object({
    Email: yup
      .string()
      .email("Invalid email address")
      .required("Email address is empty"),
    Password: yup
      .string()
      .required("Password field is empty")
      .min(8, "Invalid password. Length minimum 8 characters."),
  })
  .required(
    "Fields are not filled or entered incorrectly. Correct or re-enter please.",
  );

const Login: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [isHidePassword, setHidePassword] = useState(true);
  const [checkMail, setCheckMail] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);

  const onHideToggle = (): void => {
    setHidePassword((pre) => !pre);
  };

  const onCheckMail = (): void => {
    setCheckMail(false);
    setSendEmail(false);
  };

  const handleSubmitLogin: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleSubmitMail = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSendEmail(true);
  };

  return (
    <div className={styles.login}>
      <Link href="/">
        <a className={styles.back} type="button">
          <HiArrowNarrowLeft />
        </a>
      </Link>
      {!checkMail ? (
        <div className={styles.background} />
      ) : (
        <div className={styles.background1} />
      )}
      <div className={styles.gradient} />
      <div className={styles.ellipse1} />
      <div className={styles.ellipse2} />
      {!checkMail ? (
        <div className={styles.red_spots1} />
      ) : (
        <div className={styles.red_spots3} />
      )}
      <div className={styles.red_spots2} />
      <div className={styles.logo} />

      {!checkMail ? (
        <form
          className={styles.login_form}
          onSubmit={handleSubmit(handleSubmitLogin)}
        >
          <h2>Welcome</h2>
          <div className={styles.input_block}>
            {errors?.Email && (
              <div className={styles.error}>{errors.Email.message}</div>
            )}
            <div
              className={classNames(styles.wrapper, {
                [styles.error_input]: errors?.Email,
              })}
            >
              <div className={styles.icon}>
                <Image src={emailIcon as string} width={24} height={24} />
              </div>
              <input type="text" placeholder="Email" {...register("Email")} />
            </div>
          </div>
          <div className={styles.input_block}>
            {errors?.Password && (
              <div className={styles.error}>{errors.Password.message}</div>
            )}
            <div
              className={classNames(styles.wrapper, {
                [styles.error_input]: errors?.Password,
              })}
            >
              <div className={styles.icon}>
                <Image src={passwordIcon as string} width={24} height={24} />
              </div>
              <div className={styles.hide} onClick={onHideToggle}>
                <Image src={hideIcon as string} width={24} height={24} />
              </div>
              <input
                type={isHidePassword ? "password" : "text"}
                placeholder="Password"
                {...register("Password")}
              />
            </div>
          </div>
          <p onClick={() => setCheckMail(true)}>Forgot Password</p>
          <button type="submit">Next</button>
          <Link href="registration">
            <a className={styles.login_registration}>
              {" "}
              Don’t have account? <span>Register account</span>{" "}
            </a>
          </Link>
        </form>
      ) : (
        <form className={styles.check_mail} onSubmit={handleSubmitMail}>
          <h2>Check your mail</h2>
          <p>
            {!sendEmail
              ? "Enter the email address associated with your account and we will send an email with instructions to New Password."
              : "We sent a password recovery instructions to your email."}
          </p>
          {!sendEmail && (
            <div className={styles.input_block}>
              {errors?.Email && (
                <div className={styles.error}>{errors.Email.message}</div>
              )}
              <div
                className={classNames(styles.wrapper, {
                  [styles.error_input]: errors?.Email,
                })}
              >
                <div className={styles.icon}>
                  <Image src={emailIcon as string} width={24} height={24} />
                </div>
                <input type="text" placeholder="Email" {...register("Email")} />
              </div>
            </div>
          )}
          {!sendEmail ? (
            <button type="submit">Send</button>
          ) : (
            <button type="button" onClick={onCheckMail}>
              Open my email
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default Login;
