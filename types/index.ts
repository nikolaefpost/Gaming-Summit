import { StaticImageData } from "next/image";
import React, {FC} from "react";
import {INewArticle} from "../contentful";

export interface INavData {
  id: number;
  title: string;
  href: string;
  outerHref?: string;
  isHover: boolean;
}

export interface IText {
  [key: string]: string;
}


export type OutputType<T> = {
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  isFocus?: boolean;
  isValue?: boolean;
};

export interface IIcon {
  className?: string;
}

export interface IlayoutItems {
  id: number;
  title: string;
  icon: FC<IIcon>;
  href: string;
}

export interface IlanguageData {
  icon: React.FC<IIcon>;
  title: string;
  isSelect: boolean;
}

export interface IRatingList {
  id: number;
  image: StaticImageData;
  name: string;
  rating: number;
  isSelect: boolean;
}

export type UseSingleImageHook = (
  ref: React.RefObject<HTMLInputElement>,
  defaultImageUrl?: string,
) => IUseImageSingleOutput;

export interface IUseImageSingleOutput {
  image: string;
  error: string | ArrayBuffer;
  onDelete: () => void;
  onClick: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ChangeEventType<T> = (event: React.ChangeEvent<T>) => void;

export interface INewsSlider {
  slides: INewArticle[];
}

export interface InfoText {
  id: number;
  room: string;
  participants: number;
  hours: string;
  icon: StaticImageData;
}

export interface IFloor {
  setInfoText: (item:InfoText)=>void;
}

export interface IResponse {
  status: string;
  token?: string;
  url?: string;
  document?: IDocument;
  eventID?: number;
}

export interface IDocument {
  ID: number;
  authorID: number;
  name: string;
  link: string;
  dateOfConfirmation: string;
}
