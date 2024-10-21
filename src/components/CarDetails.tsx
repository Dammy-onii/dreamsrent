function CarDetails() {
  return (
    <div className=" w-full h-full lg:h-[20vh] flex flex-col md:flex-row items-center justify-between px-4 py-4 lg:px-20 shadow-lg ">
      <div className=" h-full flex flex-col justify-center my-2 ">
        <h1>Chevrolet Camaro</h1>
        <div className=" w-full flex flex-row justify-between gap-2 ">
          <h3>Location : Miami St, Destin, FL 32550, USA</h3>
          <h3>|</h3>
          <h3>Views : 250</h3>
          <h3>|</h3>
          <h3>Views : Listed on: 01 Jan, 2024</h3>
        </div>
      </div>
      <div className="flex flex-row justify-center text-[#fff] gap-4">
        <div className=" rounded-md flex items-center justify-center px-4 py-2 bg-[#093734] text-sm ">
          <h2>Total Booking : 300</h2>
        </div>
        <button className=" outline-none rounded-md flex items-center justify-center px-4 py-2 bg-[gray] hover:bg-[#093734] ">
          <h2>Compare</h2>
        </button>
      </div>
    </div>
  );
}

export default CarDetails;
