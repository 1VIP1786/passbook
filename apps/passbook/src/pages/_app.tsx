import { appWithTranslation } from "next-i18next";
import "styles/tailwind.css";
import "styles/global.css";
import { StateProvider } from "context";
import { RouteGuard } from "components/routeGuard";

const MyApp = ({ Component, pageProps }) => {
  return (
    <StateProvider>
      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>
    </StateProvider>
  );
};
export default appWithTranslation(MyApp);
