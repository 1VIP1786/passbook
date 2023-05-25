import { login } from "api";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import swal from "sweetalert";

export const Timer = (props: any) => {
  const { t } = useTranslation("otp");
  const router = useRouter();
  const resendOTP = async () => {
    setMinutes(0);
    setSeconds(60);
    const response = await login(props?.aadhar);
    if (response?.status == 201) {
      swal({
        text: t("otp_sent_successfully"),
        icon: "success",
      });
      router.push(
        `/otp?aadhar=${props?.aadhar}&txn=${response?.data?.Value[0]?.otptxn}&mobile=${response?.data?.Value[0]?.maskedMobile}`
      );
    }
  };

  const { initialMinute = 0, initialSeconds = 60 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      <div className="font-regular text-center text-appGray">
        {minutes === 0 && seconds === 0 ? null : (
          <>
            {t("time_remaining")}: {minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </>
        )}
      </div>
      <button
        disabled={seconds > 0 || minutes > 0}
        className="font-regular"
        style={{
          color: seconds > 0 || minutes > 0 ? "#9e9e9e" : "#626161",
        }}
        onClick={resendOTP}
      >
        {t("resend_otp")}
      </button>
    </>
  );
};
