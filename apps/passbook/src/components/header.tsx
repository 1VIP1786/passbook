export const Header = () => {
  return (
    <>
      <div className="fixed top-12 md:w-[470px] w-full h-auto bg-white border-t border-gray-200">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
          <div className="inline-flex flex-col items-start justify-center px-5 group">
            <img src="/images/govtLogo.png" alt="govtLogo" />
          </div>
          <div className="inline-flex flex-col items-center justify-center group">
            <img src="/images/logo.png" alt="familyID Logo" />
          </div>
          <div className="inline-flex flex-col items-end justify-center px-5 group">
            <img src="/images/cm.svg" alt="CM" />
          </div>
        </div>
      </div>
    </>
  );
};
