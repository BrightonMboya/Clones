import ReviewCard from "./ReviewCard";

const TestimonialCard = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-sky-500 w-[43vh] h-full ml-5 rounded-2xl mt-[7vh]">
      <div className="flex flex-col items-center justify-center text-white">
        <p className="mt-3 ">List your property</p>
        <h3 className="font-bold text-xl">Be Like Akinsola</h3>
        <p className="font-medium text-center mt-3 text-lg px-3">
          List Your Property & become one of 100+ hosts across Cameroon and
          Rwanda
        </p>
        <div className="">
          <span>
            <button className="rounded-lg mt-5 h-19 w-[15vh] text-base text-indigo-700 bg-white py-3 font-semibold">
              Learn More
            </button>
          </span>

          <span>
            <button className="border-2 rounded-lg h-15 w-[16vh] text-base ml-7 py-3">
              List Property
            </button>
          </span>
        </div>
      </div>
      <ReviewCard/>
    </div>
  );
};

export default TestimonialCard;
