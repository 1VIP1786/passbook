import { HomeIcon, FamilyIcon, BenefitsIcon, DiscoverIcon } from "assets/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const Bottombar = () => {
  const router = useRouter();
  const { t } = useTranslation("bottomBar");
  const { pathname } = router;
  return (
    <>
      {pathname && (
        <div className="fixed bottom-0 md:w-[470px] w-full h-16 bg-white border-t border-gray-200 ">
          <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <Link href="/home">
              <button
                type="button"
                className={
                  pathname.includes("/home")
                    ? "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 mt-2 group text-primary"
                    : "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 mt-2 group text-gray-500 "
                }
              >
                <HomeIcon />
                <span
                  className={
                    pathname.includes("/home")
                      ? "text-sm text-primary"
                      : "text-sm text-gray-500"
                  }
                >
                  {t("home")}
                </span>
              </button>
            </Link>
            <Link href="/family">
              <button
                type="button"
                className={
                  pathname.includes("/family")
                    ? "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 mt-2 group text-primary"
                    : "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 mt-2 group text-gray-500 "
                }
              >
                <FamilyIcon />
                <span
                  className={
                    pathname.includes("/family")
                      ? "text-sm text-primary"
                      : "text-sm text-gray-500"
                  }
                >
                  {t("family")}
                </span>
              </button>
            </Link>
            <Link href="/benefits">
              <button
                type="button"
                className={
                  pathname.includes("/benefits")
                    ? "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 mt-2 group text-primary"
                    : "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 mt-2 group text-gray-500 "
                }
              >
                <BenefitsIcon />
                <span
                  className={
                    pathname.includes("/benefits")
                      ? "text-sm text-primary"
                      : "text-sm text-gray-500"
                  }
                >
                  {t("benefits")}
                </span>
              </button>
            </Link>
            <Link href="/discover">
              <button
                type="button"
                className={
                  pathname.includes("/discover")
                    ? "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 mt-2 group text-primary"
                    : "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 mt-2 group text-gray-500 "
                }
              >
                <DiscoverIcon />
                <span
                  className={
                    pathname.includes("/discover")
                      ? "text-sm text-primary"
                      : "text-sm text-gray-500"
                  }
                >
                  {t("discover")}
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
