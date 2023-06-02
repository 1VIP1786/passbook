import { CMImage } from "assets/images/cm";

export const Header = () => {
  return (
    <>
      <div className="fixed top-12 medium-width w-full h-auto bg-white border-t border-gray-200">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
          <div className="inline-flex flex-col items-start justify-center px-5 group">
            <img src="/images/govtLogo.svg" alt="govtLogo" />
          </div>
          <div className="inline-flex flex-col items-center justify-center group">
            <img src="/images/logo.png" alt="familyID Logo" />
          </div>
          <div className="inline-flex flex-col items-end justify-center px-5 group">
            <CMImage />
          </div>
        </div>
      </div>
    </>
  );
};
