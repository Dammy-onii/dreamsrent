
import CustomButton from "../customs/CustomButton/CustomButton";
import CustomInput from "../customs/CustomInput/CustomInput";

function Booking() {
  return (
    <div className=" h-fit bg-[#fff] px-4 py-4 flex flex-col gap-2 rounded shadow-md ">
      <h2>Check Availability</h2>
      <div className="divide">
        <div className="divideBorder"></div>
      </div>

      <CustomInput
        label="Delivery Location"
        placeholder="45, 4th Avenue, Mark Street, USA"
      />
      <CustomInput
        label="Return Location"
        placeholder="45, 4th Avenue, Mark Street, USA"
      />
      <div className=" flex flex-col py-2 ">
        <h2>Pickup Date</h2>
        <div className=" flex flex-row items-center gap-4 justify-between my-1 px-2 py-1 rounded-md  ">
          <input
            type="date"
            className=" w-full rounded bg-gray-100 px-2 py-1 outline-none bg-inherit "
          />
          <input
            type="time"
            className=" w-full rounded bg-gray-100 px-2 py-1 outline-none bg-inherit "
          />
        </div>
      </div>
      <div className=" flex flex-col py-2 ">
        <h2>Return Date</h2>
        <div className=" flex flex-row items-center gap-4 justify-between my-1 px-2 py-1 rounded-md  ">
          <input
            type="date"
            className=" w-full rounded bg-gray-100 px-2 py-1 outline-none bg-inherit "
          />
          <input
            type="time"
            className=" w-full rounded bg-gray-100 px-2 py-1 outline-none bg-inherit "
          />
        </div>
      </div>
      <CustomButton icon="" text="Book" color="orange" />
      <CustomButton icon="" text="Enquire Us" color="teal" />
    </div>
  );
}

export default Booking;
