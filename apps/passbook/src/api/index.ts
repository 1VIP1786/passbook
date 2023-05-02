import axios from "axios";
import { setCookie } from "cookies-next";

const baseUrl = "http://128.199.21.16:3000";

export const login = async (familyId: string) => {
  const response = await axios.post(`${baseUrl}/auth/login/${familyId}`);
  return response;
};

export const verifyOtp = async (otp: string, familyId: any) => {
  try {
    const response = await axios.post(
      `${baseUrl}/auth/verifyOTP/${familyId}/${otp}`
    );
    setCookie(
      "responseToken",
      response?.data?.result?.data?.user?.refreshToken
    );
    setCookie("token", response?.data?.result?.data?.user?.token);
    setCookie("username", response?.data?.result?.data?.user?.user?.name);
    return response;
  } catch (error) {
    return error?.response;
  }
};

// export const resendOtp = async (otp: string, familyId: any) => {};
