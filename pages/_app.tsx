import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { NextPageWithLayout } from "../types/page";
import { getLayout as getSiteLayout } from "../layouts/RootLayout/RootLayout";
import { store } from "../store/store";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? getSiteLayout;

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}

export default App;
