import { Navbar, Header, Bottombar } from "components";
import { ComingSoon } from "assets/icons";
import { Button } from "ui";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation("comingSoon");
  const handleClick = async (event: any) => {
    router.push(`/home`);
  };
  return (
    <div className="mb-20">
      <Navbar />
      <Header />
      <div className="pt-40 sm:pt-48 ">
        {" "}
        <div className="bg-tertiary rounded-xl px-4 py-5 mx-3 min-h-[70vh]">
          <h1 className="text-appGray text-[20px] text-center pb-3 font-bold border-b border-[#DB6027]">
            About
          </h1>
          <div className="mt-5 font-medium text-appGray text-[18px]">
            Family ID
          </div>
          <p className="text-appGray text-[14px] font-regular mt-2 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <div className="mt-5 font-medium text-appGray text-[18px]">
            Family Passbook
          </div>
          <p className="text-appGray text-[14px] font-regular mt-2 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <p className="text-appGray text-[14px] font-regular mt-4 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>

      <Bottombar />
    </div>
  );
};

export default About;
