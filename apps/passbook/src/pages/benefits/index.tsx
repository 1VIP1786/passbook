import { Navbar, Header, Bottombar } from "components";
import { CheveronIcon, SchemesAvailed, SchemesIcon } from "assets/icons";
import { RupeeIcon } from "assets/icons/rupee";
import { useEffect, useState } from "react";
import { getFamilySchemes } from "api";

const Benefits: React.FC = () => {
  const [data, setData]: any = useState();
  useEffect(() => {
    const getData = async () => {
      const res: any = await getFamilySchemes();
      setData(res);
    };
    getData();
  }, []);
  return (
    <div className="mb-20">
      <Navbar />
      <Header />

      <div className="pt-40 sm:pt-48">
        <div className="bg-tertiary rounded-xl px-4 py-5 mx-3">
          <div className="form-control">
            <label className="flex justify-evenly cursor-pointer">
              <span className="font-bold text-[12px] text-[#695F5F] uppercase flex items-center">
                Schemes
              </span>
              <input type="checkbox" className="toggle toggle-primary" />
              <span className="font-bold text-[12px] text-[#695F5F] uppercase flex items-center">
                Transactions
              </span>
            </label>
          </div>
          {data && (
            <div className="bg-primary py-4 px-5 mt-5 rounded-md">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="text-white font-medium text-[12px]">
                    Total Family Benefits
                  </div>
                  <div className="text-white font-bold">Rs 92,227 /-</div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-white font-bold text-[12px]">
                    Schemes: {data?.schemeCount}
                  </div>
                  <div className="text-white font-bold text-[12px]">
                    Services: 0
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-5 pb-3">
            <div className="dropdown dropdown-bottom">
              <label
                tabIndex={0}
                className="text-[11px] font-regular bg-white rounded px-3 py-2 text-black"
              >
                Benefit Type&nbsp;&nbsp;
                <CheveronIcon />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu py-2 shadow bg-base-100 rounded w-auto uppercase font-demi text-[12px] mt-2"
              >
                <li className="text-[#313144]">
                  <a>Cash</a>
                </li>
                <li className="text-[#313144]">
                  <a>In Kind</a>
                </li>
                <li className="text-[#313144]">
                  <a>Certificates</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-bottom ml-2">
              <label
                tabIndex={0}
                className="text-[11px] font-regular bg-white rounded px-3 py-2 text-black"
              >
                Beneficiary&nbsp;&nbsp;
                <CheveronIcon />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu py-2 shadow bg-base-100 rounded w-auto uppercase font-demi text-[12px] mt-2"
              >
                <li className="text-[#313144]">
                  <a>Cash</a>
                </li>
                <li className="text-[#313144]">
                  <a>In Kind</a>
                </li>
                <li className="text-[#313144]">
                  <a>Certificates</a>
                </li>
              </ul>
            </div>
          </div>
          {data &&
            data?.schemes &&
            data?.schemes?.map((scheme: any) => (
              <div
                className="grid grid-cols-7 mt-4 border-b border-[#B4B0B0] pb-2"
                key={scheme?.code}
              >
                <div className="group flex items-center">
                  <SchemesIcon />
                </div>
                <div className="group text-[12px] text-appGray col-span-4 flex items-center">
                  {scheme?.schemeName}
                </div>
                <div className="flex items-center justify-between text-[12px] text-appGray ml-2">
                  <div className="flex items-center">
                    {scheme?.totalBeneficiary}
                  </div>
                  <SchemesAvailed />
                </div>
                <div className="flex items-center justify-end text-[12px] text-appGray">
                  <RupeeIcon />
                </div>
              </div>
            ))}
        </div>
      </div>

      <Bottombar />
    </div>
  );
};

export default Benefits;
