import { useRouter } from "next/router";
import { Navbar, Header, Bottombar } from "components";
import { BackIcon, CasteCertiIcon, WalletIcon } from "assets/icons";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Button } from "ui";
import { digilockerSignin } from "api";

const FamilyMemberAddDocuments: React.FC = () => {
  const { t } = useTranslation("familyDetails");
  const router = useRouter();
  const code = router?.query?.code;
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    if (code) {
      const sendCode = async () => {
        const res = await digilockerSignin(
          router?.query?.code,
          router?.query?.state
        );
        setDocuments(res);
      };
      sendCode();
    }
  }, [code]);

  return (
    <div className="mb-20">
      <Navbar />
      <Header />

      <div className="pt-40 sm:pt-48">
        <div className="bg-tertiary rounded-xl px-4 py-6 lg:py-10 mx-3">
          <div className="font-bold text-center text-[20px] uppercase text-appGray">
            Family Wallet
          </div>
          <div className="bg-white border-[#DC6127] border-2 border-solid rounded-xl pb-1 mt-4 px-3">
            <div className="mt-4 flex justify-between">
              <Link href={`/family`}>
                <BackIcon />
              </Link>
              <div className="font-demi text-appGray mb-3 mx-3 text-[18px]">
                Add Documents
              </div>
              <WalletIcon />
            </div>

            <div className="border-2 border-[#e3e3e3] font-medium text-appGray py-1 px-2 grid grid-cols-7 mt-8 rounded">
              {documents &&
                documents?.length > 0 &&
                documents?.map((document) => (
                  <div className="form-control" key={document?.doctype}>
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        checked={document?.imported}
                        className="checkbox checkbox-primary"
                      />
                      <div className="flex">
                        <div className="mr-3 ml-5 mt-2">
                          <CasteCertiIcon />
                        </div>
                        <div className="flex self-center w-[50vw]">
                          {" "}
                          {document?.name}
                        </div>
                      </div>
                    </label>
                  </div>
                ))}
            </div>
            <div className="flex justify-center mt-12 mb-5">
              <Button
                className="font-medium"
                onClick={() => {}}
                text={t("Add Documents")}
              />
            </div>
          </div>
        </div>
      </div>
      <Bottombar />
    </div>
  );
};

export default FamilyMemberAddDocuments;
