import "../styles/globals.scss";
import type { AppProps } from "next/app";

import { NextPageWithLayout } from "../types/page";
import { getLayout as getSiteLayout } from "../layouts/RootLayout/RootLayout";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? getSiteLayout;

  return getLayout(<Component {...pageProps} />);
}
