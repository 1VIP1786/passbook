import { useState } from "react";

export const LanguageSwitcher = () => {
  const [isEngActive, setIsEngActive] = useState("");
  return (
    <div>
      <button
        id="hindi"
        className={`${isEngActive ? "active-language" : ""} language-switcher font-medium`}
        style={{ borderRadius: "5px 0px 0px 5px" }}
        // onClick={toggleLanguage("en")}
      >
        हिंदी
      </button>
      <button
        id="eng"
        className={`${!isEngActive ? "language-switcher active-language" : "language-switcher"} language-switcher font-medium`}
        style={{ borderRadius: "0px 5px 5px 0px" }}
        // onClick={toggleLanguage("or")}
      >
        English
      </button>
    </div>
  );
};
