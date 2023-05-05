import { Lock } from "assets/icons";
import { useRouter } from "next/router";
import { Button } from "ui";

const Fallback = () => {
  const router = useRouter();
  const handleClick = async (event: any) => {
    router.push(`/`);
  };
  return (
    <>
      <h1 className="text-primary font-bold text-[28px] mb-4">
        Something went wrong!
      </h1>
      <Lock />
      <div className="font-regular text-appGray text-center px-7 mt-5">
        Please try logging in again.
      </div>
      <Button className="font-medium mt-4" onClick={handleClick} text="Login" />
    </>
  );
};

export default Fallback;
