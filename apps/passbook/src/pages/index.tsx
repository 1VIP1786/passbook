import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "ui";
import swal from "sweetalert";
import { login } from "../api";

export default function Index() {
  const router = useRouter();
  const [loginId, setloginId] = useState(null);
  const handleClick = async (event: any) => {
    if (loginId) {
      const response = await login(loginId);
      if (response.status == 201) {
        swal({
          text: response.data,
          icon: "success",
        });
        router.push("/otp");
      }
    } else {
      swal({
        text: "Please enter the Family ID",
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
        <h1 className="text-center text-gray-500 text-[1.5rem] font-medium">
          Enter Family ID
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
        <Button className="font-medium" onClick={handleClick} text="Login" />
      </div>
    </div>
  );
}
