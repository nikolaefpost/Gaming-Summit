// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.
import { Asset, Entry } from "contentful";

import { Document } from "@contentful/rich-text-types";

export interface ILatestBlogFields {
  /** Title */
  title?: string | undefined;

  /** Main Photo */
  mainPhoto?: Asset | undefined;

  /** Resource Link */
  resourceLink?: string | undefined;
}

export interface ILatestBlog extends Entry<ILatestBlogFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "latestBlog";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INewArticleFields {
  /** Topic */
  topic?: string | undefined;

  /** Announcement */
  content?: string | undefined;

  /** Formating text */
  formatingText?: Document | undefined;

  /** slug */
  slug?: string | undefined;

  /** News Image */
  newsImage?: Asset | undefined;

  /** Publication Date */
  publicationDate?: string | undefined;
}

export interface INewArticle extends Entry<INewArticleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "newArticle";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "latestBlog" | "newArticle";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
