import { useEffect, useState } from "react";
import { Navbar, Header, Bottombar } from "components";
import { getFamilySummary } from "api";
import Fallback from "components/fallback";
import Loading from "assets/icons/loading";
import { useTranslation } from "react-i18next";
import { CoinIcon } from "assets/icons";
import { useStateContext } from "context";
import Link from "next/link";

const Home: React.FC = () => {
  const { t } = useTranslation("home");
  const { locale } = useStateContext();
  const [summary, setSummary]: any = useState();
  useEffect(() => {
    const getData = async () => {
      const res: any = await getFamilySummary();
      setSummary(res);
    };
    getData();
  }, []);
  return (
    <div className="mb-20">
      <Navbar />
      <Header />
      {summary ? (
        summary?.status != 500 && summary?.status != 403 ? (
          <div className="pt-40 sm:pt-48">
            <Link href="/family">
              <div className="bg-summary-card py-7 px-5 mx-5 rounded-lg text-white">
                <div className="flex justify-between">
                  <div className="font-regular text-[11px] uppercase">
                    {t("family_id")}
                  </div>
                  {/* <img src="/images/logo.png" /> */}
                </div>

                <h1 className="font-demi text-[24px] mt-6">
                  {summary?.familyID?.match(/.{1,4}/g)?.map((char: any) => (
                    <>{char}&nbsp;&nbsp;</>
                  ))}
                </h1>

                <h1 className="font-demi text-[20px] mt-6">
                  {locale == "hi" ? summary?.nameh : summary?.namee}
                </h1>
                <div className="font-regular text-[11px]">
                  {locale == "hi"
                    ? summary?.districtNameh
                    : summary?.districtNamee}
                  {summary?.blockName && `,${summary?.blockName}`}
                </div>
                <div className="flex justify-between mt-1">
                  <div className="font-medium text-[11px]">
                    #{summary?.numberOfMembers} {t("members")}
                  </div>
                  <div className="font-regular text-[11px]">
                    {t("fy")} {summary?.fy}
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/benefits?transactions=true">
              <div className="bg-tertiary py-4 px-3 mt-10 mx-5 rounded-lg text-appGray text-center">
                <div className="flex justify-center">
                  <CoinIcon />
                  <h1 className="font-bold text-[24px] ml-3">
                    {summary?.amountAvailed
                      ? `${t("Rs")} ${summary?.amountAvailed}`
                      : `${t("Rs")} 0`}
                  </h1>
                </div>
                <div className="font-regular text-[11px]">
                  {t("benefits_availed")}
                </div>
              </div>
            </Link>
            <Link href="/benefits">
              <div className="py-2 px-3 mt-4 mx-5 rounded-lg text-center bg-tertiary font-regular uppercase text-appGray flex justify-center items-center">
                <span className="font-bold text-[24px]">
                  {summary?.schemesAvailed}
                </span>
                <span className="ml-2 font-demi text-[12px]">
                  {t("schemes_availed")}
                </span>
              </div>
            </Link>
          </div>
        ) : (
          <div className="bg-tertiary min-h-screen flex flex-col justify-center items-center">
            <Fallback />
          </div>
        )
      ) : (
        <div className="bg-tertiary min-h-screen flex flex-col justify-center items-center">
          <Loading />
        </div>
      )}
      <Bottombar />
    </div>
  );
};

export default Home;
