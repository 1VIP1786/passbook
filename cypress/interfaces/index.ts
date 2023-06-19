export interface Routes {
  login: string;
  otp: string;
}

export interface LoginPageTexts {
  heading: string;
  validAadharNumber: string;
  invalidAadharNumber: string;
  registrationPortal: string;
  button: string;
}

export interface ApiRoutes {
  login: {
    method: string;
    route: string;
  };
}
