import { appWithTranslation } from "next-i18next";
import "styles/tailwind.css";
import "styles/global.css";
import { StateProvider } from "context";
import { RouteGuard } from "components/routeGuard";
import flagsmith from "flagsmith/isomorphic";
import { FlagsmithProvider } from "flagsmith/react";

const MyApp = ({ Component, pageProps, flagsmithState }) => {
  return (
    <StateProvider>
      <FlagsmithProvider serverState={flagsmithState} flagsmith={flagsmith}>
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </FlagsmithProvider>
    </StateProvider>
  );
};

MyApp.getInitialProps = async () => {
  await flagsmith.init({
    environmentID: process.env.NEXT_PUBLIC_ENVIRONMENT_ID,
  });
  return { flagsmithState: flagsmith.getState() };
};

export default MyApp;
