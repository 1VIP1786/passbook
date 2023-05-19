import { useState } from "react";
import OtpInput from "react-otp-input";
import { useRouter } from "next/router";
import { Button } from "ui";
import { verifyOtp } from "../../api";
import swal from "sweetalert";
import { Timer } from "components";
import { useTranslation } from "react-i18next";

const Otp: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation("otp");
  const { aadhar, txn, mobile } = router?.query;
  const [otp, setOtp] = useState("");

  const handleClick = async (event: any) => {
    if (otp) {
      const response = await verifyOtp(otp, aadhar, txn);
      if (response?.status == 201) {
        swal({
          text: t("successful_logged_in"),
          icon: "success",
        });
        router.push("/home");
      } else {
        swal({
          text: t("can_not_verify_otp"),
          icon: "error",
        });
      }
    } else {
      swal({
        text: t("please_enter_the_otp"),
        icon: "warning",
      });
    }
  };
  return (
    <div className="xl:py-16 xl:px-14 lg:py-16 lg:px-14 md:py-16 md:px-14 py-6 px-5 bg-tertiary min-h-[100vh]">
      <div className="flex justify-between">
        <img src="./images/govtLogo.png" />
        <img src="./images/cm.png" />
      </div>
      <div className="flex justify-center mt-10">
        <img src="./images/logo.png" />
      </div>
      <div className="flex justify-center mt-5 flex-col">
        <h1 className="text-center text-gray-500 text-[1.3rem] font-medium">
          {t("enter_otp")}
        </h1>
        <div className="mt-5 justify-center flex">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
            renderInput={(props) => <input {...props} />}
            inputType="number"
            inputStyle={{
              width: "2rem",
              height: "2rem",
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button
          className="font-medium"
          onClick={handleClick}
          text={t("submit")}
        />
      </div>
      <div className="mt-6 text-appGray font-regular text-center">
        <Timer aadhar={aadhar} />
      </div>
    </div>
  );
};

export default Otp;
