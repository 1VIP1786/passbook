import Bottombar from "../../components/bottombar";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Navbar />
      <Header />
      <div className="font-medium text-[20px]">Home</div>
      <Bottombar />
    </div>
  );
};

export default Home;
