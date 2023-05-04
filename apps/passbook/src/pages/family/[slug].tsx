import { useRouter } from "next/router";
import { Navbar, Header, Bottombar } from "../../components";
import { BackIcon, FemaleAvatar, MaleAvatar } from "../../assets/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getFamilyData } from "../../api";

const FamilyMemberDetails: React.FC = () => {
  const [data, setData]: any = useState();
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    const getData = async () => {
      const res: any = await getFamilyData();
      setData(res);
    };
    getData();
  }, []);
  console.log(slug);
  return (
    <div className="mb-20">
      <Navbar />
      <Header />
      {data &&
        data?.familyMembers &&
        data?.familyMembers.map(
          (familyMember: any) =>
            familyMember?.familyMemberId == slug && (
              <div className="pt-40 sm:pt-48">
                <div className="bg-tertiary rounded-xl px-4 py-6 lg:py-10 mx-3">
                  <div className="font-bold text-center underline text-[20px] uppercase text-black">
                    {familyMember?.namee}
                  </div>
                  <div className="bg-white border-[#DC6127] border-2 border-solid rounded-xl px-3 pb-7 mt-6">
                    <div className="mt-3">
                      <Link href="/family">
                        <BackIcon />
                      </Link>
                    </div>
                    <div className="flex justify-center mt-4">
                      {familyMember?.gender == "M" ? (
                        <MaleAvatar size="large" />
                      ) : (
                        <FemaleAvatar size="large" />
                      )}
                    </div>
                    <table className="table-auto mt-6 font-regular">
                      <tbody>
                        <tr>
                          <td className="pt-2 text-appGray">Relation</td>
                          <td className="text-primary font-demi pt-2">
                            <span className="text-black font-regular">
                              : &nbsp;&nbsp;
                            </span>
                            {familyMember?.relation}
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-2 text-appGray">Gender</td>
                          <td className="text-primary font-demi pt-2 capitalize">
                            <span className="text-black font-regular">
                              : &nbsp;&nbsp;
                            </span>
                            {familyMember?.gender}
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-2 text-appGray">Age</td>
                          <td className="text-primary font-demi pt-2">
                            <span className="text-black font-regular">
                              : &nbsp;&nbsp;
                            </span>
                            {familyMember?.age}
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-2 text-appGray">Date of Birth</td>
                          <td className="text-primary font-demi pt-2">
                            <span className="text-black font-regular">
                              : &nbsp;&nbsp;
                            </span>
                            {familyMember?.dob}
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-2 text-appGray">Occupation</td>
                          <td className="text-primary font-demi pt-2">
                            <span className="text-black font-regular">
                              : &nbsp;&nbsp;
                            </span>
                            {familyMember?.occupation}
                          </td>
                        </tr>
                        {familyMember?.schemesAvailed && (
                          <tr>
                            <td className="pt-2 text-appGray">
                              Schemes Availed&nbsp;
                            </td>
                            <td className="text-primary font-demi pt-2">
                              <span className="text-black font-regular">
                                : &nbsp;&nbsp;
                              </span>
                              {familyMember?.schemesAvailed}
                            </td>
                          </tr>
                        )}
                        {familyMember?.caste && (
                          <tr>
                            <td className="pt-2 text-appGray">Caste&nbsp;</td>
                            <td className="text-primary font-demi pt-2">
                              <span className="text-black font-regular">
                                : &nbsp;&nbsp;
                              </span>
                              {familyMember?.caste}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
        )}
      <Bottombar />
    </div>
  );
};

export default FamilyMemberDetails;
