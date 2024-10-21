function PricingDetails() {
  return (
    <div className=" h-fit bg-[#fff] px-4 py-4 flex flex-col gap-2 rounded shadow-md ">
      <h2>Pricing Details</h2>
      <div className="divide">
        <div className="divideBorder"></div>
      </div>

      <div className=" w-full h-14 px-4 rounded bg-teal-300 flex flex-row items-center justify-between my-2 ">
        <h2>Per day (8 Hours)</h2>
        <h2 className=" font-semibold ">$300</h2>
      </div>
      <div className=" flex flex-row items-center justify-end text-blue-300 ">
        <span className="material-symbols-outlined">docs</span>
        <h2 className="  text-sm ">Fare Summary</h2>
      </div>
    </div>
  );
}

export default PricingDetails;
