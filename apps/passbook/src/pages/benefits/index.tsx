import { Navbar, Header, Bottombar } from "components";
import { BenefitsIcon, SchemesAvailed, SchemesIcon } from "assets/icons";
import {
  AgricultureDepartment,
  BalVikas,
  BasicEducation,
  EmpowermentDisabilities,
  FoodAndCivil,
  RevenueDepartment,
  SecondaryEducation,
  SocialWelfare,
  UrbanDevelopment,
  UrbanEmployment,
  VocationalEducation,
  WomenWelfare,
  WorkersWelfareBoard,
} from "assets/icons/departments";
import { RupeeIcon } from "assets/icons/rupee";
import { useEffect, useState } from "react";
import { getFamilyData, getFamilySchemes, getFamilyTransactions } from "api";
import Fallback from "components/fallback";
import Loading from "assets/icons/loading";
import Dropdown from "components/dropdown";
import { useTranslation } from "react-i18next";
import { useStateContext } from "context";
import { useRouter } from "next/router";
import { departmentLogos } from "config/departmentLogos";

const Benefits: React.FC = () => {
  const router = useRouter();
  const [data, setData]: any = useState();
  const [transactions, setTransactions]: any = useState();
  const [checked, setChecked] = useState(
    router?.query?.transactions ? true : false
  );
  const [beneficiaryData, setBeneficiaryData]: any = useState();
  const [benefitType, setBenefitType] = useState([]); // Array to store selected benefit types
  const [fy, setFy] = useState([]); // Array to store selected fiscal years
  const [beneficiary, setBeneficiary] = useState([]); // Array to store selected beneficiaries

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
    const selectedValue = event.target.getAttribute("value");

    // Check if the selected value is already in the array
    const isSelected = benefitType.includes(selectedValue);

    if (isSelected) {
      // Remove the selected value from the array
      setBenefitType((prevSelections) =>
        prevSelections.filter((value) => value !== selectedValue)
      );
    } else {
      // Add the selected value to the array
      setBenefitType((prevSelections) => [...prevSelections, selectedValue]);
    }
  };

  const handleFyChange = (event: any) => {
    const selectedValue = event.target.getAttribute("value");

    const isSelected = fy.includes(selectedValue);

    if (isSelected) {
      setFy((prevSelections) =>
        prevSelections.filter((value) => value !== selectedValue)
      );
    } else {
      setFy((prevSelections) => [...prevSelections, selectedValue]);
    }
  };

  const handleBeneficiaryChange = (event: any) => {
    const selectedValue = event.target.getAttribute("value");

    const isSelected = beneficiary.includes(selectedValue);

    if (isSelected) {
      setBeneficiary((prevSelections) =>
        prevSelections.filter((value) => value !== selectedValue)
      );
    } else {
      setBeneficiary((prevSelections) => [...prevSelections, selectedValue]);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res: any = await getFamilySchemes(benefitType, beneficiary, fy);
      const transactions: any = await getFamilyTransactions(
        benefitType,
        beneficiary,
        fy
      );
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

  const handleDepartmentIcons = (code: any) => {
    switch (departmentLogos[code].DepartmentCode) {
      case 101:
        return <AgricultureDepartment />;
      case 104:
        return <SocialWelfare />;
      case 105:
        return <BalVikas />;
      case 106:
        return <BasicEducation />;
      case 110:
        return <SocialWelfare />;
      case 111:
        return <EmpowermentDisabilities />;
      case 113:
        return <FoodAndCivil />;
      case 124:
        return <SecondaryEducation />;
      case 125:
        return <SocialWelfare />;
      case 126:
        return <UrbanDevelopment />;
      case 127:
        return <UrbanEmployment />;
      case 128:
        return <WorkersWelfareBoard />;
      case 129:
        return <VocationalEducation />;
      case 130:
        return <WomenWelfare />;
      case 131:
        return <RevenueDepartment />;
      default:
        return <BenefitsIcon />;
    }
  };

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
                      checked={checked}
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
                    heading={benefitType && t("benefit_type")}
                    options={benefitTypeOptions}
                    handleChange={handleBenefitTypeChange}
                    value={benefitType}
                  />
                  <Dropdown
                    heading={beneficiary && t("beneficiary")}
                    options={beneficiaryData}
                    handleChange={handleBeneficiaryChange}
                    value={beneficiary}
                    className="ml-2"
                  />
                  <Dropdown
                    heading={fy && t("fy")}
                    options={fyOptions}
                    handleChange={handleFyChange}
                    value={fy}
                    className="ml-2"
                  />
                </div>

                {checked ? (
                  transactions &&
                  transactions?.transactions &&
                  transactions?.transactions?.length > 0 ? (
                    transactions?.transactions
                      ?.filter(
                        (e: any) =>
                          beneficiary.length === 0 ||
                          beneficiary.includes(e.familymemberID)
                      )
                      // Sorting transaciton in chronological order
                      .sort((a: any, b: any) => {
                        const dateA = new Date(a.transactionDate);
                        const dateB = new Date(b.transactionDate);
                        return dateB.getTime() - dateA.getTime();
                      })
                      .map((transaction: any) => (
                        <div className="grid grid-cols-7 mt-4 border-b border-[#B4B0B0] pb-2">
                          <div className="group flex items-center text-primary">
                            {handleDepartmentIcons(transaction?.schemeCode)}
                          </div>
                          <div className="group text-[12px] text-appGray col-span-4 flex-col items-center">
                            {transaction?.schemeName}
                            <div>{`${new Date(
                              transaction?.transactionDate
                            ).getDate()} ${new Date(
                              transaction?.transactionDate
                            ).toLocaleString("default", {
                              month: "short",
                            })} ${new Date(
                              transaction?.transactionDate
                            ).getFullYear()}`}</div>
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
                  )
                ) : data && data?.schemes && data?.schemes?.length > 0 ? (
                  data?.schemes
                    .filter((scheme: any) =>
                      scheme.beneficariesList.some(
                        (b: any) =>
                          beneficiary.length === 0 ||
                          beneficiary.includes(b.familymemberID)
                      )
                    )
                    .sort(
                      (a: any, b: any) =>
                        b.totalBeneficiary - a.totalBeneficiary
                    )
                    .map((scheme: any) => (
                      <div
                        className="grid grid-cols-7 mt-4 border-b border-[#B4B0B0] pb-2"
                        key={scheme?.code}
                      >
                        <div className="group flex items-center text-primary">
                          {handleDepartmentIcons(scheme?.schemeCode)}
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
