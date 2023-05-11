import { useRouter } from "next/router";
import { Navbar, Header, Bottombar } from "components";
import {
  AddIcon,
  BackIcon,
  BirthCertiIcon,
  CasteCertiIcon,
  DomicileCertiIcon,
  IncomeCertiIcon,
  ProfileFemaleIcon,
  ProfileMaleIcon,
} from "assets/icons";
import Link from "next/link";
import { useStateContext } from "context";
import { useTranslation } from "react-i18next";

const FamilyMemberDetails: React.FC = () => {
  const { t } = useTranslation("familyDetails");
  const router = useRouter();
  const { familyData, locale } = useStateContext();
  const { slug } = router.query;

  return (
    <div className="mb-20">
      <Navbar />
      <Header />
      {familyData &&
        familyData?.familyMembers &&
        familyData?.familyMembers.map(
          (familyMember: any) =>
            familyMember?.familyMemberId == slug && (
              <div className="pt-40 sm:pt-48">
                <div className="bg-tertiary rounded-xl px-4 py-6 lg:py-10 mx-3">
                  <div className="font-bold text-center text-[20px] uppercase text-appGray">
                    {locale == "hi" ? familyMember?.nameh : familyMember?.namee}
                  </div>
                  <div className="bg-white border-[#DC6127] border-2 border-solid rounded-xl px-3 pb-1 mt-4">
                    <div className="mt-3">
                      <Link href="/family">
                        <BackIcon />
                      </Link>
                    </div>
                    <div className="flex justify-center mt-4">
                      {familyMember?.gender == "M" ? (
                        <ProfileMaleIcon />
                      ) : (
                        <ProfileFemaleIcon />
                      )}
                    </div>
                    <table className="table-auto mt-3 font-regular mx-3">
                      <tbody>
                        <tr>
                          <td className="pt-2 text-appGray">{t("relation")}</td>
                          <td className="text-primary font-demi pt-2">
                            <span className="text-appGray font-regular">
                              : &nbsp;&nbsp;
                            </span>
                            {familyMember?.relation}
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-2 text-appGray">{t("gender")}</td>
                          <td className="text-primary font-demi pt-2 capitalize">
                            <span className="text-appGray font-regular">
                              : &nbsp;&nbsp;
                            </span>
                            {familyMember?.gender}
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-2 text-appGray">{t("age")}</td>
                          <td className="text-primary font-demi pt-2">
                            <span className="text-appGray font-regular">
                              : &nbsp;&nbsp;
                            </span>
                            {familyMember?.age}
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-2 text-appGray">
                            {t("dob")}&nbsp;&nbsp;&nbsp;
                          </td>
                          <td className="text-primary font-demi pt-2">
                            <span className="text-appGray font-regular">
                              : &nbsp;&nbsp;
                            </span>
                            {familyMember?.dob?.split("T")[0]}
                          </td>
                        </tr>
                        {familyMember?.occupation && (
                          <tr>
                            <td className="pt-2 text-appGray">
                              {t("occupation")}
                            </td>
                            <td className="text-primary font-demi pt-2">
                              <span className="text-appGray font-regular">
                                : &nbsp;&nbsp;
                              </span>
                              {familyMember?.occupation}
                            </td>
                          </tr>
                        )}
                        {familyMember?.schemesAvailed && (
                          <tr>
                            <td className="pt-2 text-appGray">
                              Schemes Availed&nbsp;
                            </td>
                            <td className="text-primary font-demi pt-2">
                              <span className="text-appGray font-regular">
                                : &nbsp;&nbsp;
                              </span>
                              {familyMember?.schemesAvailed}
                            </td>
                          </tr>
                        )}
                        {familyMember?.caste && (
                          <tr>
                            <td className="pt-2 text-appGray">
                              {t("caste")}&nbsp;
                            </td>
                            <td className="text-primary font-demi pt-2">
                              <span className="text-appGray font-regular">
                                : &nbsp;&nbsp;
                              </span>
                              {familyMember?.caste}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <div className="mt-11">
                      <h1 className="uppercase text-appGray text-[15px] font-bold text-center">
                        {t("issued_documents")}
                      </h1>
                      <div className="flex justify-around mt-3">
                        <div className="text-center font-medium text-[11px] text-appGray flex justify-center flex-col items-center">
                          <CasteCertiIcon />
                          <p className="mt-2">
                            {t("caste_certificate")}
                            <br />
                            {t("certificate")}
                          </p>
                        </div>
                        <div className="text-center font-medium text-[11px] text-appGray flex justify-center flex-col items-center">
                          <DomicileCertiIcon />
                          <p className="mt-2">
                            {t("domicile_certificate")}
                            <br />
                            {t("certificate")}
                          </p>
                        </div>
                        <div className="text-center font-medium text-[11px] text-appGray flex justify-center flex-col items-center">
                          <IncomeCertiIcon />
                          <p className="mt-2">
                            {t("income_certificate")}
                            <br />
                            {t("certificate")}
                          </p>
                        </div>
                        {/* <div className="text-center font-medium text-[11px] text-appGray flex justify-center flex-col items-center">
                          <BirthCertiIcon />
                          <p className="mt-2">{t("birth_certificate")}</p>
                        </div> */}
                        <div className="text-center font-medium text-[11px] text-appGray flex mt-[0.4rem] flex-col items-center">
                          <AddIcon />
                          <p className="mt-6">{t("add_more")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-appGray text-[11px] text-center font-regular">
                      {t("family_data_updated")}
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      <Bottombar />
    </div>
  );
};

export default FamilyMemberDetails;
