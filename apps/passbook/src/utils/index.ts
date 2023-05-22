import { sha256 } from "js-sha256";

// Program to generate random strings

// declare all characters
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#*!";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export const getCodeChallenge = () => {
  const encryptedSha256 = sha256(`${generateString(6)}${Date.now()}`);
  let encryptedbase64 = btoa(encryptedSha256);
  encryptedbase64 = encryptedbase64.replace("=", "");
  encryptedbase64 = encryptedbase64.replace("+", "-");
  encryptedbase64 = encryptedbase64.replace("/", "_");
  return encryptedbase64;
};
