import { useRouter } from "next/router";
import { Navbar, Header, Bottombar } from "components";
import {
  AddIcon,
  BackIcon,
  BirthCertiIcon,
  CasteCertiIcon,
  DomicileCertiIcon,
  FemaleAvatar,
  IncomeCertiIcon,
  MaleAvatar,
} from "assets/icons";
import Link from "next/link";
import { useStateContext } from "context";

const FamilyMemberDetails: React.FC = () => {
  const router = useRouter();
  const { familyData } = useStateContext();
  const { slug } = router.query;

  return (
    <div className="mb-20">
      <Navbar />
      <Header />
      {familyData &&
        familyData?.familyMembers &&
        familyData?.familyMembers.map(
          (familyMember: any) =>
            familyMember?.familyMemberId == slug && (
              <div className="pt-40 sm:pt-48">
                <div className="bg-tertiary rounded-xl px-4 py-6 lg:py-10 mx-3">
                  <div className="font-bold text-center text-[20px] uppercase text-primary">
                    {familyMember?.namee}
                  </div>
                  <div className="bg-white border-[#DC6127] border-2 border-solid rounded-xl px-3 pb-1 mt-4">
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
                    <table className="table-auto mt-3 font-regular mx-3">
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
                          <td className="pt-2 text-appGray">
                            Date of Birth&nbsp;&nbsp;&nbsp;
                          </td>
                          <td className="text-primary font-demi pt-2">
                            <span className="text-black font-regular">
                              : &nbsp;&nbsp;
                            </span>
                            {familyMember?.dob?.split("T")[0]}
                          </td>
                        </tr>
                        {familyMember?.occupation && (
                          <tr>
                            <td className="pt-2 text-appGray">Occupation</td>
                            <td className="text-primary font-demi pt-2">
                              <span className="text-black font-regular">
                                : &nbsp;&nbsp;
                              </span>
                              {familyMember?.occupation}
                            </td>
                          </tr>
                        )}
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
                    <div className="mt-11">
                      <h1 className="uppercase text-appGray text-[15px] font-bold text-center">
                        Issued Documents
                      </h1>
                      <div className="flex justify-around mt-3">
                        <div className="text-center font-medium text-[10px] text-appGray flex justify-center flex-col items-center">
                          <CasteCertiIcon />
                          <p className="mt-2">
                            Caste <br />
                            Certificate
                          </p>
                        </div>
                        <div className="text-center font-medium text-[10px] text-appGray flex justify-center flex-col items-center">
                          <DomicileCertiIcon />
                          <p className="mt-2">
                            Domicile <br />
                            Certificate
                          </p>
                        </div>
                        <div className="text-center font-medium text-[10px] text-appGray flex justify-center flex-col items-center">
                          <IncomeCertiIcon />
                          <p className="mt-2">
                            Income <br />
                            Certificate
                          </p>
                        </div>
                        <div className="text-center font-medium text-[10px] text-appGray flex justify-center flex-col items-center">
                          <BirthCertiIcon />
                          <p className="mt-2">
                            Birth <br />
                            Certificate
                          </p>
                        </div>
                        <div className="text-center font-medium text-[10px] text-appGray flex justify-center flex-col items-center">
                          <AddIcon />
                          <p className="mt-2">
                            Add <br />
                            More
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-appGray text-[10px] text-center font-regular">
                      Please keep your family data updated.
                    </div>
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
