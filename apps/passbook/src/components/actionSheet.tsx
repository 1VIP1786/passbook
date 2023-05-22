import { CrossIcon } from "assets/icons";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { getCodeChallenge } from "utils";

export const ActionSheet = ({ showBox, toggleBox }) => {
  const { t } = useTranslation("comingSoon");
  const router = useRouter();
  getCodeChallenge();
  const handleClick = () => {
    router.push(
      `${
        process.env.NEXT_PUBLIC_DIGILOCKER_URL
      }/public/oauth2/1/authorize?response_type=code&client_id=${
        process.env.NEXT_PUBLIC_DIGILOCKER_CLIENT_ID
      }&redirect_uri=${
        process.env.NEXT_PUBLIC_URL
      }/family&code_challenge_method=S256&code_challenge=${getCodeChallenge()}&state=${
        router?.asPath
      }`
    );
  };
  return (
    <>
      {showBox && (
        <div className="actionsheet-container mb-12">
          <div className="actionsheet-box pb-12">
            <div className="flex justify-end">
              <button onClick={toggleBox} className="actionsheet-slide-down">
                <CrossIcon />
              </button>
            </div>
            <h2 className="text-primary font-demi text-center py-5 border-solid border-[#6840F7] border rounded-xl mx-7">
              <button className="text-[#6840F7] px-7" onClick={handleClick}>
                Login with{" "}
                <img
                  src="/images/digilogo.png"
                  alt="Digilocker Logo"
                  className="px-10 py-2"
                />{" "}
                MeriPehchaan
              </button>
            </h2>
          </div>
        </div>
      )}
    </>
  );
};
