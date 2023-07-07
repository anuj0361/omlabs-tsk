import "@/styles/globals.css";

import type { AppProps } from "next/app";
import React from "react";
import { ModalProvider } from "../context/modalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
