import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="favicon.ico" sizes="16x16" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Family ID, passbook" />
        <meta
          name="description"
          content="Family Passbook is a citizen facing app envisioned to make scheme delivery seamless and convenient for the families of Uttar Pradesh. The passbook app will contain a ledger of benefits recieved by a family along with enabling discovery of schemes for which a family is eligible."
        />
        <meta name="author" content="@passbook" />
        <meta name="theme-color" content="#e1703b" />

        <meta name="twitter:card" content="Summary" />
        <meta name="twitter:site" content="@passbook" />
        <meta name="twitter:title" content="Family ID | Passbook" />
        <meta
          name="twitter:description"
          content="Family Passbook is a citizen facing app envisioned to make scheme delivery seamless and convenient for the families of Uttar Pradesh. The passbook app will contain a ledger of benefits recieved by a family along with enabling discovery of schemes for which a family is eligible."
        />
        <meta name="twitter:creator" content="@passbook" />
        <meta
          name="twitter:image:src"
          content="https://passbook.web.vercel.app/icons/logo512.png"
        />

        <meta property="og:title" content="Family ID | Passbook" />
        <meta property="og:url" content="https://passbook.web.vercel.app/" />
        <meta
          property="og:image"
          content="https://passbook.web.vercel.app/icons/logo512.png"
        />
        <meta
          property="og:description"
          content="Family Passbook is a citizen facing app envisioned to make scheme delivery seamless and convenient for the families of Uttar Pradesh. The passbook app will contain a ledger of benefits recieved by a family along with enabling discovery of schemes for which a family is eligible."
        />
        <meta property="og:site_name" content="Family ID | Passbook" />

        <link rel="apple-touch-icon" href="icons/logo192.png" />
        <link rel="manifest" href="manifest.json" />
        <link rel="icon" href="icons/favicon.ico" />

        <title>पासवृक</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
