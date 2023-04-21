import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Button } from "ui";

export default function Otp() {
  const [otp, setOtp] = useState("");
  const handleClick = (event: any) => {
    console.log(event.type);
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
    </div>
  );
}
