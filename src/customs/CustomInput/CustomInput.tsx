type CustomInput = {
    label: string,
    placeholder: string,
}

const CustomInput = ({label, placeholder}: CustomInput) => {
  return (
    <div className=" flex flex-col py-2 ">
      <h2>{label}</h2>
      <div className=" flex flex-row items-center justify-between bg-gray-100 my-1 px-2 py-1 rounded-md ">
        <input
          type="text"
          placeholder={placeholder}
          className=" w-full px-2 py-1 outline-none bg-inherit "
        />
        <span className="material-symbols-outlined">pin_drop</span>
      </div>
    </div>
  );
};

export default CustomInput;
