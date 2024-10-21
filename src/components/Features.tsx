const Features = () => {
  const features = [
    {
      icon: "check_circle",
      text: "Multi-zone A/C",
    },
    {
      icon: "check_circle",
      text: "Premium sound system",
    },
    {
      icon: "check_circle",
      text: "6 Cylinders",
    },
    {
      icon: "check_circle",
      text: "Heated front seats",
    },
    {
      icon: "check_circle",
      text: "Bluetooth",
    },
    {
      icon: "check_circle",
      text: "Adaptive Cruise Control",
    },
    {
      icon: "check_circle",
      text: "Android Auto",
    },
    {
      icon: "check_circle",
      text: "Keyless Start",
    },
    {
      icon: "check_circle",
      text: "Intermittent wipers",
    },
    {
      icon: "check_circle",
      text: "Navigation system",
    },
    {
      icon: "check_circle",
      text: "Memory seat",
    },
    {
      icon: "check_circle",
      text: "4 power windows",
    },
  ];

  return (
    <div className="flex flex-col gap-4 bg-white rounded px-4 py-4 shadow-lg">
      <h2 className="">Car Features</h2>
      <div className="divide">
        <div className="divideBorder"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div className="flex flex-row gap-2 items-center" key={index}>
            <span className="material-symbols-outlined bg-white border px-2 py-2 rounded-md text-teal-600">
              {feature.icon}
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-gray-800">{feature.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
