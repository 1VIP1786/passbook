import React, { useState } from "react";
import { Button } from "ui";

export default function Otp() {
  const [loginId, setloginId] = useState(null);
  const handleClick = (event: any) => {
    console.log(event.type);
  };
  return (
    <div className="py-6 px-5">
      <div className="flex justify-between">
        <img src="./images/govtLogo.png" />
        <img src="./images/cm.png" />
      </div>
      <div className="flex justify-center mt-10">
        <img src="./images/logo.png" />
      </div>
      <div className="flex justify-center mt-5 flex-col">
        <h1 className="text-center text-gray-500 text-[1.3rem] tracking-[.06em] font-medium">
          Enter 4 digit OTP
        </h1>
        <input
          type="text"
          className="mt-5 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-regular"
          value={loginId}
          onChange={(e: any) => setloginId(e.target.value)}
        />
      </div>
      <div className="flex justify-center mt-10">
        <Button className="font-medium" onClick={handleClick} text="Submit" />
      </div>
    </div>
  );
}
