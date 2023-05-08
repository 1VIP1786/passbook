import { Navbar, Header, Bottombar } from "components";
import { CheveronIcon, SchemesAvailed, SchemesIcon } from "assets/icons";
import { RupeeIcon } from "assets/icons/rupee";
import { useEffect, useState } from "react";
import { getFamilyData, getFamilySchemes } from "api";
import Fallback from "components/fallback";
import Loading from "assets/icons/loading";
import Dropdown from "components/dropdown";

const Benefits: React.FC = () => {
  const [data, setData]: any = useState();
  const [checked, setChecked] = useState(true);
  const [beneficiaryData, setBeneficiaryData]: any = useState();
  const [benefitType, setBenefitType]: any = useState("C");
  const [fy, setFy]: any = useState("2022-23");
  const [beneficiary, setBeneficiary]: any = useState("");

  const benefitTypeOptions = [
    { value: "C", label: "Cash" },
    { value: "IK", label: "In Kind" },
    { value: "CE", label: "Certificates" },
  ];
  const fyOptions = [
    { value: "2021-22", label: "2021-22" },
    { value: "2022-23", label: "2022-23" },
  ];
  const handleBenefitTypeChange = (event: any) => {
    const attributeValue = event.target.getAttribute("value");
    setBenefitType(attributeValue);
  };
  const handleFyChange = (event: any) => {
    const attributeValue = event.target.getAttribute("value");
    setFy(attributeValue);
  };
  const handleBeneficiaryChange = (event: any) => {
    const attributeValue = event.target.getAttribute("value");
    setBeneficiary(attributeValue);
  };

  useEffect(() => {
    const getData = async () => {
      const res: any = await getFamilySchemes(benefitType, beneficiary, fy);
      setData(res);
    };
    getData();
  }, [benefitType, beneficiary, fy]);

  useEffect(() => {
    const getData = async () => {
      const beneficiaryOptions = [];
      const res: any = await getFamilyData();
      res?.familyMembers?.forEach((familyMember: any) => {
        beneficiaryOptions.push({
          value: familyMember?.familyMemberId,
          label: familyMember?.namee,
        });
      });
      setBeneficiaryData(beneficiaryOptions);
    };
    getData();
  }, []);
  return (
    <div className="mb-20">
      <Navbar />
      <Header />
      {data ? (
        data?.status !== 500 && data?.status !== 403 ? (
          <>
            <div className="pt-40 sm:pt-48">
              <div className="bg-tertiary rounded-xl px-4 py-5 mx-3 min-h-[70vh]">
                <div className="form-control">
                  <label className="flex justify-evenly cursor-pointer">
                    <span className="font-bold text-[12px] text-[#695F5F] uppercase flex items-center">
                      Schemes
                    </span>
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      onChange={() => setChecked(!checked)}
                    />
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
                        <div className="text-white font-bold">Rs 92,227</div>
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
                  <Dropdown
                    heading="Benefit Type"
                    options={benefitTypeOptions}
                    handleChange={handleBenefitTypeChange}
                    value={benefitType}
                  />
                  <Dropdown
                    heading="Beneficiary"
                    options={beneficiaryData}
                    handleChange={handleBeneficiaryChange}
                    value={beneficiary}
                    className="ml-2"
                  />
                  <Dropdown
                    heading="FY"
                    options={fyOptions}
                    handleChange={handleFyChange}
                    value={fy}
                    className="ml-2"
                  />
                </div>

                {checked ? (
                  data && data?.schemes && data?.schemes?.length > 0 ? (
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
                    ))
                  ) : (
                    <div className="font-medium py-5 text-primary">
                      No schemes available for the selected filter.
                    </div>
                  )
                ) : (
                  <div className="grid grid-cols-7 mt-4 border-b border-[#B4B0B0] pb-2">
                    <div className="group flex items-center">
                      <SchemesIcon />
                    </div>
                    <div className="group text-[12px] text-appGray col-span-4 flex items-center">
                      Integrated Development of Horticulture (MIDH) CSS
                    </div>
                    <div className="flex items-end justify-end text-appGray ml-2 flex-col col-span-2">
                      <div className="flex items-center">
                        <div className="text-[#23C96F] uppercase text-[11px] font-demi">
                          IN KIND
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-appGray uppercase text-[11px] font-demi">
                          NarAAjiya
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {}
              </div>
            </div>
          </>
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

export default Benefits;
