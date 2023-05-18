import axios from "axios";
import { setCookie, getCookie } from "cookies-next";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const login = async (aadhar: string) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login/${aadhar}`);
    return response;
  } catch (error) {
    return error?.response;
  }
};

export const verifyOtp = async (otp: string, aadhar: any, txn: any) => {
  try {
    const body = {
      otp,
      otptxn: txn,
    };
    const response = await axios.post(
      `${baseUrl}/auth/verifyOTP/${aadhar}`,
      JSON.stringify(body)
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

export const getFamilyTransactions = async (
  benefitType: any,
  beneficiary: any,
  fy: any
) => {
  try {
    const response = await axios.get(
      `${baseUrl}/family/${getCookie(
        "username"
      )}/transactions?financialYear=${fy}&benefitType=${benefitType}&beneficiary=${beneficiary}`,
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
