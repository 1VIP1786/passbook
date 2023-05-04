import { useEffect, useState } from "react";
import { Navbar, Header, Bottombar } from "../../components";
import { getFamilySummary } from "../../api";

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
      {summary && (
        <div className="pt-40 sm:pt-48">
          <div className="bg-primary py-4 px-3 mx-5 rounded-lg text-white">
            <h1 className="font-demi text-[20px]">{summary?.familyID}</h1>
            <div className="font-regular text-[11px]">FAMILY ID</div>

            <h1 className="font-demi text-[20px] mt-2">{summary?.namee}</h1>
            <div className="font-regular text-[11px]">
              Bilariaganj, Azamgarh
            </div>
            <div className="flex justify-between mt-3">
              <div className="font-medium text-[11px]">
                #{summary?.numberOfMembers} members
              </div>
              <div className="font-regular text-[11px]">FY 2022-23</div>
            </div>
          </div>
          <div className="text-primary font-demi mt-4 text-center underline text-[18px]">
            Availed
          </div>
          <div className="bg-linear-gradient py-4 px-3 mt-4 mx-5 rounded-lg text-white text-center">
            <h1 className="font-bold text-[24px]">
              {summary?.amountAvailed
                ? `Rs ${summary?.amountAvailed}`
                : "Rs 96,937"}
            </h1>
            <div className="font-regular text-[11px]">
              Benefits availed from the government schemes{" "}
            </div>
          </div>
          <div className="py-2 px-3 mt-4 mx-5 rounded-lg text-center bg-schemes-availed font-regular uppercase">
            <span className="text-secondary font-bold text-[24px]">
              {summary?.schemesAvailed}
            </span>{" "}
            <span className="align-text-bottom text-appGray">
              Schemes Availed
            </span>
          </div>
        </div>
      )}
      <Bottombar />
    </div>
  );
};

export default Home;
