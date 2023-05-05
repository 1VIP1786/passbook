import { appWithTranslation } from "next-i18next";
import "styles/tailwind.css";
import "styles/global.css";
import { StateProvider } from "context";

const MyApp = ({ Component, pageProps }) => {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
};
export default appWithTranslation(MyApp);
