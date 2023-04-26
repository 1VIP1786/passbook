import { useRouter } from "next/router";
import Bottombar from "../../components/bottombar";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import {
  BackIcon,
  FemaleAvatar,
  InfoIcon,
  MaleAvatar,
} from "../../assets/icons";
import { familyMembers } from "../../config/family";
import Link from "next/link";

const FamilyMemberDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return (
    <div className="mb-28">
      <Navbar />
      <Header />
      {familyMembers.map(
        (familyMember: any) =>
          familyMember?.id == slug && (
            <>
              <div className="bg-tertiary mt-40 rounded-xl px-4 py-6 mx-3">
                <div className="font-bold text-center underline text-[20px] uppercase text-black">
                  {familyMember?.name}
                </div>
                <div className="bg-white border-[#DC6127] border-2 border-solid rounded-xl px-3 pb-7 mt-6">
                  <div className="mt-3">
                    <Link href="/family">
                      <BackIcon />
                    </Link>
                  </div>
                  <div className="flex justify-center mt-4">
                    {familyMember?.gender == "male" ? (
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
                          30-04-1986
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
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )
      )}

      <Bottombar />
    </div>
  );
};

export default FamilyMemberDetails;
