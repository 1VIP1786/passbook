import { Navbar, Header, Bottombar } from "../../components";
import { ComingSoon } from "../../assets/icons";
import { Button } from "ui";
import { useRouter } from "next/router";

const Notifications: React.FC = () => {
  const router = useRouter();
  const handleClick = async (event: any) => {
    router.push(`/home`);
  };
  return (
    <div className="bg-tertiary min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <Header />
      <h1 className="text-primary font-bold text-[34px] mb-3">Coming Soon!</h1>
      <ComingSoon />
      <div className="font-regular text-appGray text-center px-7 mt-5">
        We are going to launch this feature very soon. Stay tune.
      </div>
      <Button className="font-medium mt-4" onClick={handleClick} text="Back" />
      <Bottombar />
    </div>
  );
};

export default Notifications;
