import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "ui";
import swal from "sweetalert";
import { getAccessTokenWithRefreshToken, login, verifyToken } from "api";
import { useTranslation } from "react-i18next";
import { useStateContext } from "context";
import { useSyncLanguage } from "ni18n";
import { getCookie, setCookie } from "cookies-next";
import { CMImage } from "assets/images/cm";

export default function Index() {
  const { t } = useTranslation("common");
  const { locale } = useStateContext();
  useSyncLanguage(locale);

  const router = useRouter();
  const [loginId, setloginId] = useState(null);
  useEffect(() => {
    if (
      getCookie("username") &&
      getCookie("token") &&
      getCookie("refreshToken")
    ) {
      const authTokenVerification = async () => {
        const res = await verifyToken();
        if (res == 200) {
          router.push("/home");
        } else {
          const res = await getAccessTokenWithRefreshToken();
          setCookie("token", res?.result?.user?.token);
          router.push("/home");
        }
      };
      authTokenVerification();
    }
  }, []);
  const handleClick = async (event: any) => {
    if (loginId) {
      const response = await login(loginId);
      if (response?.status == 403) {
        swal({
          text: t("not_valid_family_id"),
          icon: "warning",
        });
      }
      if (response?.status == 201) {
        swal({
          text: t("otp_sent_successfully"),
          icon: "success",
        });
        router.push(
          `/otp?aadhar=${loginId}&txn=${response?.data?.Value[0]?.otptxn}&mobile=${response?.data?.Value[0]?.maskedMobile}`
        );
      }
    } else {
      swal({
        text: t("please_enter_the_family_id"),
        icon: "warning",
      });
    }
  };
  return (
    <div className="xl:py-16 xl:px-14 lg:py-16 lg:px-14 md:py-16 md:px-14 py-6 px-5 bg-tertiary min-h-[100vh]">
      <div className="flex justify-between">
        <img src="./images/govtLogo.svg" alt="govtLogo" />
        <CMImage />
      </div>
      <div className="flex justify-center mt-10">
        <img src="./images/logo.png" alt="familyID Logo" />
      </div>
      <div className="flex justify-center mt-5 flex-col">
        <h1 className="text-center text-appGray text-[1.5rem] font-medium">
          {t("enter_family_id")}
        </h1>
        <input
          type="text"
          className="mt-5 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-regular"
          value={loginId}
          onChange={(e: any) => {
            if (e?.target?.value?.length > 12) {
              swal({
                text: t("not_valid_family_id"),
                icon: "warning",
              });
            }
            return setloginId(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-center mt-10">
        <Button
          className="font-medium"
          onClick={handleClick}
          text={t("login")}
        />
      </div>
      <div className="flex justify-center mt-5 font-regular text-appGray">
        {t("not_registered_on_family_id")}?&nbsp;
        <a
          href="https://familyid.up.gov.in/"
          target="blank"
          className="font-demi text-primary"
        >
          {t("click_here")}
        </a>
      </div>
    </div>
  );
}
