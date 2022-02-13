import "../styles/globals.css";
import type { AppProps } from "next/app";
import createEmotionCache from "../createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache: EmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Image Uploader</title>
      </Head>

      <Component {...pageProps} />
      
      <ToastContainer />
      
      <footer className="footer">
        <p>
          created by <a href="https://github.com/OscarWoHA">OscarWoHA</a> -
          devChallenges.io
        </p>
      </footer>
    </CacheProvider>
  );
}

export default MyApp;
