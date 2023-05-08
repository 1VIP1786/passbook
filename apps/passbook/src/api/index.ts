import axios from "axios";
import { setCookie, getCookie } from "cookies-next";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const login = async (familyId: string) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login/${familyId}`);
    return response;
  } catch (error) {
    return error?.response;
  }
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
    setCookie("username", response?.data?.result?.data?.user?.user?.username);
    return response;
  } catch (error) {
    return error?.response;
  }
};

export const getFamilySummary = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/family/${getCookie("username")}/summary`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error?.response;
  }
};

export const getFamilyData = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/family/${getCookie("username")}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error?.response;
  }
};

export const getFamilySchemes = async (
  benefitType: any,
  beneficiary: any,
  fy: any
) => {
  try {
    const response = await axios.get(
      `${baseUrl}/family/${getCookie(
        "username"
      )}/schemes?financialYear=${fy}&benefitType=${benefitType}&beneficiary=${beneficiary}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error?.response;
  }
};

// export const resendOtp = async (otp: string, familyId: any) => {};
