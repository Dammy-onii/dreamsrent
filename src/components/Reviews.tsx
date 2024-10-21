import CustomReview from "../customs/CustomReview/CustomReview";

const Reviews = () => {
  const ratings = [
    { label: "Service", score: 4.6 },
    { label: "Location", score: 4.8 },
    { label: "Value for Money", score: 3.0 },
    { label: "Facilities", score: 4.5 },
    { label: "Cleanliness", score: 4.8 },
  ];

  return (
    <div className=" flex flex-col gap-4 bg-white rounded px-4 py-4 ">
      <h2>Extra Service</h2>
      <div className="divide">
        <div className="divideBorder"></div>
      </div>

      <div className=" flex flex-col lg:flex-row gap-4 justify-between items-center ">
        <div className="flex flex-col items-center justify-center w-full md:w-1/4 border rounded-md">
          <div className=" flex flex-row items-end py-2 ">
            <h2 className="text-5xl font-bold text-teal-600">4.5</h2>
            <span className="text-xl text-gray-600">/5</span>
          </div>
          <p className="text-gray-600 mt-2">Excellent</p>
          <p className="text-gray-500">Based on 256 Reviews</p>
        </div>

        <div className="flex flex-col  w-full md:w-3/4 gap-1 ">
          {ratings.map((rating, index) => (
            <div className="grid grid-cols-5 items-center gap-4 justify-between " key={index}>
              <span className=" text-gray-700 mr-2 ">
                <h2>{rating.label}</h2>
              </span>
              <div className=" w-full col-span-3 justify-start  ">
                <div className="w-full flex bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-orange-400 h-1 rounded-full"
                    style={{ width: `${(rating.score / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-gray-700 cols-1">
                {rating.score.toFixed(1)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-white rounded-md p-4 border ">
        <h2 className=" mb-4">Showing 3 guest reviews</h2>
        <CustomReview />
        <div className=" pl-8 ">
          <CustomReview />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
