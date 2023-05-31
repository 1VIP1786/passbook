import { Navbar, Header, Bottombar } from "components";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import { Button } from "ui";

const Feedback: React.FC = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="mb-20">
      <Navbar />
      <Header />
      <div className="pt-40 sm:pt-48 ">
        <div className="bg-tertiary rounded-xl px-4 py-5 mx-3 min-h-[70vh]">
          <h1 className="text-appGray text-[20px] text-center pb-3 font-bold border-b border-[#DB6027]">
            Feedback
          </h1>
          <div className="bg-white py-3 px-4 mt-3 rounded-lg flex justify-center flex-col items-center">
            <div className="text-[18px] font-demi text-appGray mb-3 mt-2">
              Did you find this useful?
            </div>
            <StarRatings
              rating={rating}
              starDimension="35px"
              starSpacing="10px"
              changeRating={(rate: any) => setRating(rate)}
              starRatedColor="#E1703B"
              starHoverColor="#E1703B"
            />
            <div className="font-regular text-appGray mb-4 mt-6">
              Write your review (optional)
            </div>
            <textarea
              className="w-full px-3 py-2"
              placeholder="Please write your experience's feedback"
            />
            <Button
              className="font-medium mt-5 mb-3"
              onClick={() => {}}
              text={"Submit Review"}
            />
          </div>
        </div>
      </div>

      <Bottombar />
    </div>
  );
};

export default Feedback;
