import { Navbar, Header, Bottombar } from "components";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { faqs } from "config/faq";

const Help: React.FC = () => {
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
        <div className="bg-tertiary rounded-xl px-4 py-5 mx-3 min-h-[70vh]">
          <h1 className="text-appGray text-[20px] text-center pb-3 font-bold border-b border-[#DB6027]">
            FAQs
          </h1>
          {faqs &&
            faqs?.length > 0 &&
            faqs.map((faq: any) => (
              <div
                tabIndex={0}
                className="collapse collapse-arrow bg-primary rounded mt-4"
                key={faq?.id}
              >
                <div className="collapse-title text-white font-demi text-[15px] min-h-[0.5rem] py-[0.70rem]">
                  {faq?.que}
                </div>
                <div className="collapse-content font-regular text-appGray bg-white text-[13px]">
                  <p className="pt-3">{faq?.ans}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Bottombar />
    </div>
  );
};

export default Help;
