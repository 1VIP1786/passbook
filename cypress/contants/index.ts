import { Routes, LoginPageTexts, ApiRoutes } from "../interfaces";

export const routes: Routes = {
  login: "/",
  otp: "/otp",
};

export const loginPageTexts: LoginPageTexts = {
  heading: "आधार संख्या दर्ज करें",
  validAadharNumber: "349690857639",
  invalidAadharNumber: "3496908576393",
  registrationPortal: "पंजीकृत नहीं हैं? यहाँ क्लिक करें",
  button: "लॉग इन करें",
};

export const apiRoutes: ApiRoutes = {
  login: {
    method: "POST",
    route: "/auth/login/",
  },
};
