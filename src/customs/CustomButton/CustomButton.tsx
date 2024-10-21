type CustomButton = {
  color: string;
  icon?: string;
  text: string;
};

function CustomButton({ color, icon, text }: CustomButton) {
  return (
    <div className="but w-full h-full ">
      <button className={`w-full flex flex-row items-center justify-center px-4 py-2 gap-2 text-[#fff] text-sm bg-[${color}]`}>
        <span className="material-symbols-outlined">{icon}</span>
        <h2 className="  ">{text}</h2>
      </button>
    </div>
  );
}

export default CustomButton;
