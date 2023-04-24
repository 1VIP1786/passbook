const Header = () => {
  return (
    <>
      <div className="fixed top-12 left-0 z-50 w-full h-auto bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
          <div className="inline-flex flex-col items-start justify-center px-5 group">
            <img src="./images/govtLogo.png" />
          </div>
          <div className="inline-flex flex-col items-center justify-center group">
            <img src="./images/logo.png" />
          </div>
          <div className="inline-flex flex-col items-end justify-center px-5 group">
            <img src="./images/cm.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
