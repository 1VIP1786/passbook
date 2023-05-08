import { useEffect, useState } from "react";
import { Navbar, Header, Bottombar } from "components";
import { FemaleAvatar, InfoIcon, MaleAvatar } from "assets/icons";
import Link from "next/link";
import { getFamilyData } from "api";
import { useStateContext } from "context";
import Loading from "assets/icons/loading";
import Fallback from "components/fallback";

const Family: React.FC = () => {
  // const [data, setData]: any = useState();
  const { familyData, setFamilyData } = useStateContext();
  useEffect(() => {
    const getData = async () => {
      const res: any = await getFamilyData();
      setFamilyData(res);
    };
    getData();
  }, []);
  return (
    <div className="mb-20">
      <Navbar />
      <Header />
      {familyData ? (
        familyData?.status !== 500 && familyData?.status !== 403 ? (
          <div className="pt-40 sm:pt-48">
            <div className="bg-tertiary rounded-xl px-4 py-5 mx-3 min-h-screen">
              <div className="text-primary font-bold text-center text-[20px] uppercase">
                My family
              </div>
              {familyData &&
                familyData?.familyMembers &&
                familyData?.familyMembers.map((familyMember: any) => (
                  <div
                    className="bg-white px-3 py-3 rounded-md mt-5"
                    key={familyMember?.familyMemberId}
                  >
                    <div className="flex">
                      <div className="mr-4 flex items-center">
                        {familyMember?.gender == "F" ? (
                          <FemaleAvatar size="" />
                        ) : (
                          <MaleAvatar size="" />
                        )}
                      </div>
                      <div className="flex justify-between w-full uppercase">
                        <div className="text-[12px] text-[#525252] font-demi">
                          {familyMember?.namee}
                          <div className="font-regular text-[10px]">
                            {familyMember?.relation}
                          </div>
                        </div>
                        <div className="ml-4 flex items-center">
                          <Link
                            href={`/family/${familyMember?.familyMemberId}`}
                          >
                            <InfoIcon />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="bg-tertiary min-h-screen flex flex-col justify-center items-center">
            <Fallback />
          </div>
        )
      ) : (
        <div className="bg-tertiary min-h-screen flex flex-col justify-center items-center">
          <Loading />
        </div>
      )}

      <Bottombar />
    </div>
  );
};

export default Family;
