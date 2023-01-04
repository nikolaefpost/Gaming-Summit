import React, { useState } from "react";

import { ChangeEventType, OutputType, UseSingleImageHook } from "../types";

export const useValidateInput = <T>(
  initialState: T,
  callback: (arg: T) => boolean,
): OutputType<T> => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [value, setValue] = useState<T>(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(() => event.target.value as unknown as T);
    setIsValid(true);
  };

  const onBlur = (): void => {
    setIsValid(() => callback(value));
  };

  const onFocus = (): void => {
    setIsValid(true);
  };

  return { value, isValid, onChange, onBlur, onFocus };
};

export const useValidateInputEdit = <T>(
  initialState: T,
  callback: (arg: T) => boolean,
): OutputType<T> => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [value, setValue] = useState<T>(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIsValid(() => callback(event.target.value as unknown as T));
    setValue(() => event.target.value as unknown as T);
  };

  const onBlur = (): void => {
    setIsValid(() => callback(value));
  };

  // const onFocus = (): void => {
  //   setIsValid(false);
  // };

  return { value, isValid, onChange, onBlur };
};

export const useInputOne = (): OutputType<number | string> => {
  const [value, setValue] = useState<number | string>("");
  const [isValue, setIsValue] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value.length > 1 ? e.target.value[0] : e.target.value);
  };

  const onBlur = (): void => {
    if (value && value !== "e") setIsValue(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isValue,
  };
};

export const useInput = (
  initialValue: number | string,
  setMatchPassword: (flag: boolean) => void,
): OutputType<number | string> => {
  const [value, setValue] = useState<number | string>(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // if (Number(e.target.value))
    setValue(e.target.value);
  };

  const onFocus = (): void => {
    setMatchPassword(false);
  };

  return {
    value,
    onChange,
    onFocus,
  };
};

export const expression = (str: string, pattern: RegExp): boolean => {
  const match = str.match(pattern);
  return Boolean(match && str === match[0]);
};

export const validateMail = (mail: string): boolean => {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
  const rule = expression(mail, pattern);
  return Boolean(rule);
};

export const validatePassword = (password: string): boolean => {
  return !!password;
};

export const validateName = (name: string): boolean => {
  return name.length >= 2;
};

export const isImageFile = (type: string): boolean => {
  const pattern = /^image\/\w+$/gim;
  const rule = expression(type, pattern);
  return Boolean(rule);
};

export const fileToUrl = (file: File): Promise<string> => {
  const fReader = new FileReader();
  const formData = new FormData();
  const fileBuff = new Blob([file]);

  fReader.readAsDataURL(file);
  formData.append("formFile", fileBuff);

  return new Promise<string>((resolve, reject) => {
    fReader.onload = (event) => {
      resolve(event.target?.result as string);
    };
    fReader.onerror = (event): void => {
      reject(event.target?.result);
    };
  });
};

export const useSingleImage: UseSingleImageHook = (ref, defaultImage) => {
  const [image, setImage] = useState<string>(defaultImage || "");
  const [error, setError] = useState<string | ArrayBuffer>("");

  const onClick = (): void => {
    ref?.current?.click();
  };

  const onDelete = (): void => {
    setImage(() => "");
  };

  const onChange: ChangeEventType<HTMLInputElement> = (event) => {
    if (event?.currentTarget?.files) {
      const file = event.currentTarget.files[0];
      if (isImageFile(file.type)) {
        fileToUrl(file)
          .then((response) => setImage(() => response))
          .catch((_error: string | ArrayBuffer) => setError(() => _error));
      }
    }
  };

  return { image, error, onDelete, onClick, onChange };
};

/**
 * Set API path for services
 * @param {string} apiPath - absolute path
 * @return {(query: string) => string} Function to concat api url services
 */
export const setApiPath = (apiPath: string): ((query: string) => string) => {
  return (query: string): string => {
    const aliases = [...apiPath.split("/"), ...query.split("/")];
    const sorted = aliases.filter((alias) => !!alias);
    return String.prototype.concat("/", sorted.join("/"));
  };
};
