import { Navbar, Header, Bottombar } from "components";
import { BenefitsIcon, SchemesAvailed, SchemesIcon } from "assets/icons";
import { RupeeIcon } from "assets/icons/rupee";
import { useEffect, useState } from "react";
import { getFamilyData, getFamilySchemes, getFamilyTransactions } from "api";
import Fallback from "components/fallback";
import Loading from "assets/icons/loading";
import Dropdown from "components/dropdown";
import { useTranslation } from "react-i18next";
import { useStateContext } from "context";

const Benefits: React.FC = () => {
  const [data, setData]: any = useState();
  const [transactions, setTransactions]: any = useState();
  const [checked, setChecked] = useState(true);
  const [beneficiaryData, setBeneficiaryData]: any = useState();
  const [benefitType, setBenefitType]: any = useState("");
  const [fy, setFy]: any = useState("2022-23");
  const [beneficiary, setBeneficiary]: any = useState("");

  const { t } = useTranslation("benefits");
  const { locale } = useStateContext();
  const benefitTypeOptions = [
    { value: "C", label: t("cash") },
    { value: "IK", label: t("in_kind") },
    { value: "CE", label: t("certificates") },
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
      const transactions: any = await getFamilyTransactions(
        benefitType,
        beneficiary,
        fy
      );
      console.log({ res });
      setData(res);
      setTransactions(transactions);
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
          label: locale == "hi" ? familyMember?.nameh : familyMember?.namee,
        });
      });
      setBeneficiaryData(beneficiaryOptions);
    };
    getData();
  }, [locale]);
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
                      {t("schemes")}
                    </span>
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      onChange={() => setChecked(!checked)}
                    />
                    <span className="font-bold text-[12px] text-[#695F5F] uppercase flex items-center">
                      {t("transactions")}
                    </span>
                  </label>
                </div>
                {data && (
                  <div className="bg-primary py-4 px-5 mt-5 rounded-md">
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <div className="text-white font-medium text-[12px]">
                          {t("total_family_benefits")}
                        </div>
                        <div className="text-white font-bold">
                          {t("Rs")} {data?.totalAmount}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="text-white font-bold text-[12px]">
                          {t("schemes")} : {data?.schemeCount}
                        </div>
                        <div className="text-white font-bold text-[12px]">
                          {t("services")} : 0
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-5 pb-3">
                  <Dropdown
                    heading={t("benefit_type")}
                    options={benefitTypeOptions}
                    handleChange={handleBenefitTypeChange}
                    value={benefitType}
                  />
                  <Dropdown
                    heading={t("beneficiary")}
                    options={beneficiaryData}
                    handleChange={handleBeneficiaryChange}
                    value={beneficiary}
                    className="ml-2"
                  />
                  <Dropdown
                    heading={t("fy")}
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
                        <div className="group flex items-center text-primary">
                          <BenefitsIcon />
                        </div>
                        <div className="group text-[12px] text-appGray col-span-4 flex items-center">
                          {scheme?.schemeName}
                        </div>
                        <div className="flex items-center justify-between text-[13px] text-appGray ml-2">
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
                      {t("no_schemes_available")}
                    </div>
                  )
                ) : transactions &&
                  transactions?.transactions &&
                  transactions?.transactions?.length > 0 ? (
                  transactions?.transactions?.map((transaction: any) => (
                    <div className="grid grid-cols-7 mt-4 border-b border-[#B4B0B0] pb-2">
                      <div className="group flex items-center text-primary">
                        <BenefitsIcon />
                      </div>
                      <div className="group text-[12px] text-appGray col-span-4 flex items-center">
                        {transaction?.schemeName}
                      </div>
                      <div className="flex items-end justify-end text-appGray ml-2 flex-col col-span-2">
                        <div className="flex items-center">
                          <div className="text-[#23C96F] uppercase text-[11px] font-demi">
                            {transaction?.amount}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="text-appGray uppercase text-[9px] font-demi">
                            {locale == "hi"
                              ? transaction?.beneficiaryNameh
                              : transaction?.beneficiaryNamee}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="font-medium py-5 text-primary">
                    {t("no_transactions_available")}
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
