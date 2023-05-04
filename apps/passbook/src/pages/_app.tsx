import { appWithTranslation } from "next-i18next";
import "styles/tailwind.css";
import "styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default appWithTranslation(MyApp);
