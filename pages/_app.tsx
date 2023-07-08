import { CustomSessionContextProvider } from "@/context/customSession";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <CustomSessionContextProvider>
      <Component {...pageProps} />
    </CustomSessionContextProvider>
  );
}

export default MyApp;
