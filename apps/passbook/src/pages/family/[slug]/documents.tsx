import { useRouter } from "next/router";
import { Navbar, Header, Bottombar } from "components";
import {
  BackIcon,
  CasteCertiIcon,
  IncomeCertiIcon,
  ProfileFemaleIcon,
  ProfileMaleIcon,
} from "assets/icons";
import Link from "next/link";
import { useStateContext } from "context";
import { useTranslation } from "react-i18next";
import { ActionSheet } from "components/actionSheet";
import { useState } from "react";
import { Button } from "ui";

const FamilyMemberDocuments: React.FC = () => {
  const { t } = useTranslation("familyDetails");
  const router = useRouter();
  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  const { familyData, locale } = useStateContext();
  const { slug } = router?.query;

  return (
    <div className="mb-20">
      <Navbar />
      <Header />
      {familyData &&
        familyData?.familyMembers &&
        familyData?.familyMembers.map(
          (familyMember: any) =>
            familyMember?.familyMemberId == slug && (
              <div
                className="pt-40 sm:pt-48"
                key={familyMember?.familyMemberId}
              >
                <div className="bg-tertiary rounded-xl px-4 py-6 lg:py-10 mx-3">
                  <div className="font-bold text-center text-[20px] uppercase text-appGray">
                    Family Wallet
                  </div>
                  <div className="bg-white border-[#DC6127] border-2 border-solid rounded-xl pb-1 mt-4">
                    <div className="mt-3 mx-3">
                      <Link href={`/family/${familyMember?.familyMemberId}`}>
                        <BackIcon />
                      </Link>
                    </div>
                    <div
                      className="flex justify-center mt-4"
                      onClick={toggleBox}
                    >
                      {familyMember?.bs64Photo ? (
                        <img
                          src={`data:image/png;base64, ${familyMember?.bs64Photo}`}
                          alt="avatar"
                          width="24%"
                          className="rounded-full"
                        />
                      ) : familyMember?.gender == "M" ? (
                        <ProfileMaleIcon />
                      ) : (
                        <ProfileFemaleIcon />
                      )}
                    </div>
                    <div className="font-demi text-center uppercase text-appGray mt-5">
                      {locale == "hi"
                        ? familyMember?.nameh
                        : familyMember?.namee}
                    </div>
                    <div className="font-demi text-appGray mt-8 mb-3 mx-3">
                      My Documents
                    </div>
                    <div className="border-t-2 border-[#e3e3e3] font-medium text-appGray py-1 px-2 grid grid-cols-7">
                      <div className="col-span-1">
                        <CasteCertiIcon />
                      </div>
                      <div className="flex self-center ml-4 col-span-4">
                        Caste Certificate
                      </div>
                    </div>
                    <div className="border-t-2 border-[#e3e3e3] font-medium text-appGray py-1 px-2 grid grid-cols-7">
                      <div className="col-span-1">
                        <IncomeCertiIcon />
                      </div>
                      <div className="flex self-center ml-4 col-span-4">
                        Income Certificate
                      </div>
                    </div>
                    <div className="flex justify-center mt-12 mb-5">
                      <Button
                        className="font-medium"
                        onClick={() => toggleBox()}
                        text={t("Add Documents")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      <ActionSheet showBox={showBox} toggleBox={toggleBox} />
      <Bottombar />
    </div>
  );
};

export default FamilyMemberDocuments;
