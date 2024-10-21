import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 1",
  },
  {
    src: "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/cars/slider-02.jpg",
    alt: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1531920327645-347e96a7f31e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 3",
  },
  {
    src: "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/cars/slider-04.jpg",
    alt: "Image 4",
  },
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentImageIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-md">
      <div className="relative w-full h-[400px] object-cover">
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="w-full h-full object-cover rounded-md"
        />

        <div className=" w-full h-full px-2 flex justify-between items-center absolute top-0 bottom-0 ">
          <button onClick={goToPrevious} className=" w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-800 text-[#fff] ">
            &#8592;
          </button>

          <button onClick={goToNext} className=" w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-800 text-[#fff] ">
            &#8594;
          </button>
        </div>
      </div>

      <div className="flex mt-4 space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleThumbnailClick(index)}
            className={`w-20 h-14 object-cover rounded-md cursor-pointer ${
              index === currentImageIndex ? "ring-2 ring-teal-500" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
