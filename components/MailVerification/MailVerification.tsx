import classNames from "classnames";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { clockIcon } from "../../assets/icon/Login";
import styles from "../../styles/componentsStyle/MailVerification.module.scss";
import PasswordVerification from "../PasswordVerification";

const schemaCode = yup
  .object({
    num1: yup.string().max(1).required("Enter a number"),
    num2: yup.string().max(1).required("Enter a number"),
    num3: yup.string().max(1).required("Enter a number"),
    num4: yup.string().max(1).required("Enter a number"),
  })
  .required();

interface IMailVerification {
  editPassword: boolean;
  setEditPassword: (flag: boolean) => void;
}

interface ICode {
  num1: string;
  num2: string;
  num3: string;
  num4: string;
}

const MailVerification: React.FC<IMailVerification> = ({
  editPassword,
  setEditPassword,
}) => {
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<ICode>({
    mode: "onBlur",
    resolver: yupResolver(schemaCode),
  });

  const totalError = errors.num1 || errors.num2 || errors.num3 || errors.num4;

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(5);

  const updateTime = (): void => {
    if (minutes === 0 && seconds === 0) {
      setSeconds(0);
      setMinutes(5);
    } else if (seconds === 0) {
      setMinutes((min) => min - 1);
      setSeconds(59);
    } else {
      setSeconds((sec) => sec - 1);
    }
  };

  useEffect(() => {
    const token = setTimeout(updateTime, 1000);

    return function cleanUp() {
      clearTimeout(token);
    };
  });

  const handleSubmitMail: SubmitHandler<ICode> = (data) => {
    setEditPassword(true);
  };

  return !editPassword ? (
    <form className={styles.code} onSubmit={handleSubmit(handleSubmitMail)}>
      <h2>Verification code</h2>
      <p>Please enter 4-digit verification code sent to Bakulan@gmail.com</p>
      <div className={styles.clock}>
        <Image src={clockIcon as string} width={20} height={20} />
        <span>
          {minutes}:{seconds > 9 ? seconds : `0${seconds}`}
        </span>
        {totalError && <div className={styles.error_label}>Invalid code</div>}
      </div>
      <div
        className={classNames(styles.input_block, {
          [styles.is_error]: totalError,
        })}
      >
        <input
          type="number"
          {...register("num1")}
          className={classNames({
            [styles.is_focus]: !errors.num1 && dirtyFields.num1,
          })}
        />
        <input
          type="number"
          {...register("num2")}
          className={classNames({
            [styles.is_focus]: !errors.num2 && dirtyFields.num2,
          })}
        />
        <input
          type="number"
          {...register("num3")}
          className={classNames({
            [styles.is_focus]: !errors.num3 && dirtyFields.num3,
          })}
        />
        <input
          type="number"
          {...register("num4")}
          className={classNames({
            [styles.is_focus]: !errors.num4 && dirtyFields.num4,
          })}
        />
      </div>
      <p className={styles.resend}>
        Didnt receive code? <span>Resend code</span>
      </p>
      <button type="submit">Send verification</button>
    </form>
  ) : (
    <PasswordVerification />
  );
};

export default MailVerification;
