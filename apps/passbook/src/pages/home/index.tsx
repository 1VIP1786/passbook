import { useEffect, useState } from "react";
import { Navbar, Header, Bottombar } from "components";
import { getFamilySummary } from "api";
import Fallback from "components/fallback";
import Loading from "assets/icons/loading";
import { useTranslation } from "react-i18next";
import { CoinIcon } from "assets/icons";

const Home: React.FC = () => {
  const { t } = useTranslation("home");
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
            <div className="bg-summary-card py-6 px-3 mx-5 rounded-lg text-white">
              <h1 className="font-demi text-[20px]">{summary?.familyID}</h1>
              <div className="font-regular text-[11px] uppercase">
                {t("family_id")}
              </div>

              <h1 className="font-demi text-[20px] mt-2">{summary?.namee}</h1>
              <div className="font-regular text-[11px]">
                {summary?.districtNamee}, {summary?.blockName}
              </div>
              <div className="flex justify-between mt-3">
                <div className="font-medium text-[11px]">
                  #{summary?.numberOfMembers} {t("members")}
                </div>
                <div className="font-regular text-[11px]">
                  {t("fy")} {summary?.fy}
                </div>
              </div>
            </div>
            <div className="bg-tertiary py-4 px-3 mt-4 mx-5 rounded-lg text-appGray text-center">
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
            <div className="py-2 px-3 mt-4 mx-5 rounded-lg text-center bg-tertiary font-regular uppercase text-appGray">
              <span className="font-bold text-[24px]">
                {summary?.schemesAvailed}
              </span>{" "}
              <span className="align-text-bottom font-medium text-[15px]">
                {t("schemes_availed")}
              </span>
            </div>
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
