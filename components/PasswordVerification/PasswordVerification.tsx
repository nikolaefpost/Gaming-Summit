import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { hideIcon, passwordIcon } from "../../assets/icon/Login";
import styles from "../../styles/componentsStyle/MailVerification.module.scss";

interface IPassword {
  password1: string;
  password2: string;
  total: string;
}

const schema = yup
  .object({
    password1: yup
      .string()
      .min(8, "Length minimum 8 characters")
      .required("Enter a password"),
    password2: yup
      .string()
      .min(8, "Length minimum 8 characters")
      .required("Enter a password"),
  })
  .required();

const PasswordVerification: React.FC = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<IPassword>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [isHidePassword, setHidePassword] = useState(false);
  const onHideToggle = (): void => {
    setHidePassword((pre) => !pre);
  };

  const handleSubmitPassword: SubmitHandler<IPassword> = (data) => {
    if (data.password1 !== data.password2)
      setError("total", { message: "passwords do not match!" });
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    else router.push("/");
  };

  return (
    <form className={styles.code} onSubmit={handleSubmit(handleSubmitPassword)}>
      <h2>New password</h2>

      <div className={styles.password1}>
        {errors.password1 && (
          <div className={styles.error}>{errors.password1.message}</div>
        )}
        <div className={styles.icon}>
          <Image src={passwordIcon as string} width={24} height={24} />
        </div>
        <div className={styles.hide} onClick={onHideToggle}>
          <Image src={hideIcon as string} width={24} height={24} />
        </div>
        <input
          type={!isHidePassword ? "password" : "text"}
          {...register("password1")}
        />
      </div>
      <div className={styles.password2}>
        {errors.password2 && (
          <div className={styles.error}>{errors.password2.message}</div>
        )}
        <div className={styles.icon}>
          <Image src={passwordIcon as string} width={24} height={24} />
        </div>
        <div className={styles.hide} onClick={onHideToggle}>
          <Image src={hideIcon as string} width={24} height={24} />
        </div>
        <input
          type={!isHidePassword ? "password" : "text"}
          {...register("password2")}
        />
        {errors.total && (
          <span className={styles.match}>{errors.total.message}</span>
        )}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default PasswordVerification;
