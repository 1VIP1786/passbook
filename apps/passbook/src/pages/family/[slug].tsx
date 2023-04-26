import { useRouter } from "next/router";
import Bottombar from "../../components/bottombar";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { FemaleAvatar, InfoIcon, MaleAvatar } from "../../assets/icons";
import { familyMembers } from "../../config/family";

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
                <div className="font-bold text-center underline text-[20px] uppercase">
                  {familyMember?.name}
                </div>
                <div className="bg-white border-[#DC6127] border-2 border-solid rounded-xl px-4 py-7 mt-6">
                  <div className="flex justify-center">
                    {familyMember?.gender == "male" ? (
                      <MaleAvatar size="large" />
                    ) : (
                      <FemaleAvatar size="large" />
                    )}
                  </div>
                  <table className="table-auto mt-6 font-regular">
                    <tbody>
                      <tr>
                        <td className="pt-2">Relation</td>
                        <td className="text-primary font-demi pt-2">
                          <span className="text-black font-regular">
                            : &nbsp;&nbsp;
                          </span>
                          {familyMember?.relation}
                        </td>
                      </tr>
                      <tr>
                        <td className="pt-2">Gender</td>
                        <td className="text-primary font-demi pt-2 capitalize">
                          <span className="text-black font-regular">
                            : &nbsp;&nbsp;
                          </span>
                          {familyMember?.gender}
                        </td>
                      </tr>
                      <tr>
                        <td className="pt-2">Age</td>
                        <td className="text-primary font-demi pt-2">
                          <span className="text-black font-regular">
                            : &nbsp;&nbsp;
                          </span>
                          {familyMember?.age}
                        </td>
                      </tr>
                      <tr>
                        <td className="pt-2">Date of Birth</td>
                        <td className="text-primary font-demi pt-2">
                          <span className="text-black font-regular">
                            : &nbsp;&nbsp;
                          </span>
                          30-04-1986
                        </td>
                      </tr>
                      <tr>
                        <td className="pt-2">Occupation</td>
                        <td className="text-primary font-demi pt-2">
                          <span className="text-black font-regular">
                            : &nbsp;&nbsp;
                          </span>
                          {familyMember?.occupation}
                        </td>
                      </tr>
                      <tr>
                        <td className="pt-2">
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
