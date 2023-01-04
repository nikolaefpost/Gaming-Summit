// import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { LanguageProvider } from "../context";
import favicon from "../public/favicon.ico";
import "../styles/globals.css";
import * as gtag from "../utils/gtag";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  // const path = "https://fienta.com/embed.js";
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    // <SessionProvider session={session}>
    <LanguageProvider >
      <Head>
        <title>The Best 2022 Gaming Summit</title>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
    // </SessionProvider>
  );
};

export default MyApp;
