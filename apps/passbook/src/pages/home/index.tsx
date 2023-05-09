import { useEffect, useState } from "react";
import { Navbar, Header, Bottombar } from "components";
import { getFamilySummary } from "api";
import Fallback from "components/fallback";
import Loading from "assets/icons/loading";

const Home: React.FC = () => {
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
              <div className="font-regular text-[11px]">FAMILY ID</div>

              <h1 className="font-demi text-[20px] mt-2">{summary?.namee}</h1>
              <div className="font-regular text-[11px]">
                {summary?.districtNamee}, {summary?.blockName}
              </div>
              <div className="flex justify-between mt-3">
                <div className="font-medium text-[11px]">
                  #{summary?.numberOfMembers} members
                </div>
                <div className="font-regular text-[11px]">FY {summary?.fy}</div>
              </div>
            </div>
            <div className="bg-linear-gradient py-4 px-3 mt-4 mx-5 rounded-lg text-appGray text-center">
              <h1 className="font-bold text-[24px]">
                {summary?.amountAvailed
                  ? `Rs ${summary?.amountAvailed}`
                  : "Rs 96,937"}
              </h1>
              <div className="font-regular text-[11px]">
                Benefits availed from the government schemes{" "}
              </div>
            </div>
            <div className="py-2 px-3 mt-4 mx-5 rounded-lg text-center bg-linear-gradient font-regular uppercase text-appGray">
              <span className="font-bold text-[24px]">
                {summary?.schemesAvailed}
              </span>{" "}
              <span className="align-text-bottom font-medium text-[15px]">
                Schemes Availed
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
