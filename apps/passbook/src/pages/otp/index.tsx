import { useState } from "react";
import OtpInput from "react-otp-input";
import { useRouter } from "next/router";
import { Button } from "ui";
import { verifyOtp } from "../../api";
import swal from "sweetalert";
import { Timer } from "../../components";

const Otp: React.FC = () => {
  const router = useRouter();
  const { familyId } = router?.query;
  const [otp, setOtp] = useState("");
  const handleClick = async (event: any) => {
    if (otp) {
      const response = await verifyOtp(otp, familyId);
      if (response?.status == 201) {
        swal({
          text: response.data?.result?.responseMsg,
          icon: "success",
        });
        router.push("/home");
      } else {
        swal({
          text: response?.data?.message,
          icon: "error",
        });
      }
    } else {
      swal({
        text: "Please enter the OTP",
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
          Enter 4 digit OTP
        </h1>
        <div className="mt-5 justify-center flex">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
            renderInput={(props) => <input {...props} />}
            inputType="number"
            inputStyle={{
              width: "2.5rem",
              height: "2.5rem",
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button className="font-medium" onClick={handleClick} text="Submit" />
      </div>
      <div className="mt-6 text-appGray font-regular text-center">
        <Timer />
      </div>
    </div>
  );
};

export default Otp;
