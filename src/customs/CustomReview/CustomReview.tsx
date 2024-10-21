const CustomReview = () => {
  const reviews = [
    {
      name: "Johnson",
      date: "02 Jan 2023",
      reviewText:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 5.0,
      likes: 10,
      dislikes: 12,
      loves: 15,
      avatar: "https://via.placeholder.com/100", // Placeholder for the image
    },
    // Add more reviews if necessary
  ];
  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <div className="flex items-center gap-4">
            <img src="" alt="" className="w-12 h-12 rounded-full bg-[gray] " />

            <div>
              <h3 className="font-bold">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>

            <div className="ml-auto text-yellow-500">
              <span className="flex items-center">
                <span className="material-symbols-outlined text-yellow-400">
                  star
                </span>
                <span className="ml-1 text-sm">({review.rating})</span>
              </span>
            </div>
          </div>
          <p className="text-gray-700 mt-3 mb-2 ">{review.reviewText}</p>

          <div className=" flex flex-row justify-between ">
            <button className="flex items-center justify-center px-4 py-2 gap-1 bg-teal-600 text-white rounded-md">
              <span className="material-symbols-outlined">reply</span>{" "}
              <h2>Reply</h2>
            </button>
            <div className="flex items-center gap-4 mt-2 text-xs">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-gray-500">
                  thumb_up
                </span>
                <span>{review.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-gray-500">
                  thumb_down
                </span>
                <span>{review.dislikes}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-gray-500">
                  favorite
                </span>
                <span>{review.loves}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomReview;
