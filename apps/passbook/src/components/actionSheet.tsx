import { CrossIcon } from "assets/icons";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const ActionSheet = ({ showBox, toggleBox }) => {
  const { t } = useTranslation("comingSoon");
  return (
    <>
      {showBox && (
        <div className="actionsheet-container mb-12">
          <div className="actionsheet-box pb-12">
            <div className="flex justify-end">
              <button onClick={toggleBox} className="actionsheet-slide-down">
                <CrossIcon />
              </button>
            </div>
            <h2 className="text-primary font-bold text-[20px] text-center py-5">
              {t("coming_soon")} !
            </h2>
          </div>
        </div>
      )}
    </>
  );
};
