import CustomButton from "../customs/CustomButton/CustomButton";

function ContactDetails() {
  return (
    <div className=" h-fit bg-[#fff] px-4 py-4 flex flex-col gap-2 rounded shadow-md ">
      <h2>Listing Owner Details</h2>
      <div className="divide">
        <div className="divideBorder"></div>
      </div>

      <div className=" w-full  px-4 rounded bg-gray-100 flex flex-row gap-2 py-4 items-center my-2 ">
        <div className=" w-14 h-14 bg-slate-600 rounded-full "></div>
        <div className=" flex flex-col  ">
          <h2>Brooklyn Cars</h2>
          <h2 className=" font-semibold ">5.0</h2>
        </div>
      </div>

      <div className=" grid grid-cols-2 border-b py-2 ">
        <h2>Email</h2>
        <h2 className="text-gray-500">info@example.com</h2>
      </div>
      <div className=" grid grid-cols-2 border-b py-2 ">
        <h2>Phone Number</h2>
        <h2 className="text-gray-500">+1 14XXX XXX78</h2>
      </div>
      <div className=" grid grid-cols-2 mb-2 py-2 ">
        <h2>Location</h2>
        <h2 className="text-gray-500">
          4635 Pheasant Ridge Road, City Hollywood, USA
        </h2>
      </div>

      <CustomButton icon="" text="Message to Owner" color="gray" />
      <h2 className=" text-center text-green-400 flex flex-row items-center justify-center gap-2 ">
        <span className="material-symbols-outlined">call</span> Chat Via
        Whatsapp
      </h2>
    </div>
  );
}

export default ContactDetails;
