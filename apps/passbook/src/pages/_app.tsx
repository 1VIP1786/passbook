import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";
import "styles/tailwind.css";
import "styles/global.css";
import { StateProvider } from "context";
import { RouteGuard } from "components/routeGuard";
import flagsmith from "flagsmith/isomorphic";
import { FlagsmithProvider } from "flagsmith/react";

const MyApp = ({ Component, pageProps, flagsmithState }) => {
  const locale = "hi";
  useSyncLanguage(locale);

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

// @ts-ignore
export default appWithI18Next(MyApp, ni18nConfig);
