function Specifications() {
  const specs = [
    {
      icon: "local_taxi",
      text: "Body",
      subText: "Sedan",
    },
  ];
  return (
    <div className=" flex flex-col gap-2 bg-[#fff] rounded px-2 py-2 ">
      <h2>Extra Service</h2>
      <div className="divide">
        <div className="divideBorder"></div>
      </div>
      <div className=" grid grid-cols-4 justify-between ">
        {specs.map((specs, index) => (
          <div className=" flex flex-row gap-2 items-center " key={index}>
            <span className="material-symbols-outlined bg-[#fff] border px-1 py-1 rounded-md ">
              local_taxi
            </span>
            <div className=" flex flex-col gap-2 ">
              <h2>{specs.text}</h2>
              <h3>{specs.subText}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specifications;
