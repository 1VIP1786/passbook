import axios from "axios";

const baseUrl = "http://128.199.21.16:3000";

export const login = async (familyId: string) => {
  const response = await axios.post(`${baseUrl}/auth/login/${familyId}`);
  return response;
};
