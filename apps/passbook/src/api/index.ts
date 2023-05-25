import axios from "axios";
import { setCookie, getCookie, removeCookies } from "cookies-next";

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
    const response = await axios.post(`${baseUrl}/auth/verifyOTP/${aadhar}`, {
      otp,
      otptxn: txn,
    });
    setCookie("refreshToken", response?.data?.result?.data?.user?.refreshToken);
    setCookie("token", response?.data?.result?.data?.user?.token);
    setCookie("username", aadhar);
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

export const digilockerSignin = async (code: any) => {
  try {
    const response = await axios.post(
      `${baseUrl}/digilocker/signin/${getCookie("username")}`,
      {
        code,
        code_verifier: getCookie("code_verifier"),
      },
      {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    );
    removeCookies("code_verifier");
    return response?.data;
  } catch (error) {
    return error?.response;
  }
};

export const verifyToken = async () => {
  try {
    if (getCookie("username")) {
      const response = await axios.post(
        `${baseUrl}/auth/verifyToken/${getCookie("username")}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );
      return response?.data;
    } else {
      throw new Error("No cookies found for the user");
    }
  } catch (error) {
    return error;
  }
};

export const getAccessTokenWithRefreshToken = async () => {
  try {
    const response = await axios.post(`${baseUrl}/auth/refreshToken`, {
      refresh_token: getCookie("refreshToken"),
      access_token: getCookie("token"),
    });
    return response?.data;
  } catch (error) {
    return error?.response;
  }
};
