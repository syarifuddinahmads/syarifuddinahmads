import "../public/assets/styles.min.css";
import "../public/assets/preview.css";
import "../public/assets/aos.css";
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("../public/assets/bootstrap.bundle.min.js")
      : null;
    typeof document !== undefined
      ? require("../public/assets/aos.js")
      : null;
    typeof document !== undefined
      ? require("../public/assets/plugins.min.js")
      : null;
    typeof document !== undefined
      ? require("../public/assets/scripts.min.js")
      : null;
  }, [router.events]);

  return <Component {...pageProps} />
}
