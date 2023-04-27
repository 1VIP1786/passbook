import Bottombar from "../../components/bottombar";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

const Home = () => {
  return (
    <div className="mb-28">
      <Navbar />
      <Header />
      <div className="bg-primary py-4 px-3 mt-40 sm:mt-48 mx-5 rounded-lg text-white">
        <h1 className="font-demi text-[20px]">XXXXXXXXX8734</h1>
        <div className="font-regular text-[11px]">FAMILY ID</div>

        <h1 className="font-demi text-[20px] mt-2">NARAJIYA</h1>
        <div className="font-regular text-[11px]">Bilariaganj, Azamgarh</div>
        <div className="flex justify-between mt-3">
          <div className="font-medium text-[11px]">#7 members</div>
          <div className="font-regular text-[11px]">FY 2022-23</div>
        </div>
      </div>
      <div className="text-primary font-demi mt-4 text-center underline text-[18px]">
        Availed
      </div>
      <div className="bg-linear-gradient py-4 px-3 mt-4 mx-5 rounded-lg text-white text-center">
        <h1 className="font-bold text-[24px]">Rs 96,937</h1>
        <div className="font-regular text-[11px]">
          Benefits availed from the government schemes{" "}
        </div>
      </div>
      <div className="py-2 px-3 mt-4 mx-5 rounded-lg text-center bg-schemes-availed font-regular uppercase">
        <span className="text-secondary font-bold text-[24px]">23</span>{" "}
        <span className="align-text-bottom text-appGray">Schemes Availed</span>
      </div>
      <Bottombar />
    </div>
  );
};

export default Home;
