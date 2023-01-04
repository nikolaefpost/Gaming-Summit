import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

import { GA_TRACKING_ID } from "../utils/gtag";

const path = "https://fienta.com/embed.js";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:site_name" content="tallinngamingsummit.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="The Best 2022 Gaming Summit" />
          <meta property="og:url" content="https://tallinngamingsummit.com/" />
          <meta
            property="og:image"
            itemProp="image primaryImageOfPage"
            content="https://tallinngamingsummit.com/tgs.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="675" />
          <meta name="keywords" content="gaming, gaming summit, tallinn" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="The Best 2022 Gaming Summit" />
          <meta
            name="twitter:image"
            content="https://tallinngamingsummit.com/tgs.png"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}

          <script src={path} />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
