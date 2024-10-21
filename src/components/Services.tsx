function Services() {
  const services = [
    {
      icon: "share_location",
      text: "GPS Navigation Systems",
    },
    {
      icon: "wifi",
      text: "Wi-Fi Hotspot",
    },
    {
      icon: "airline_seat_flat_angled",
      text: "Child Safety Seats",
    },
    {
      icon: "water_drop",
      text: "Fuel Options",
    },
    {
      icon: "rss_feed",
      text: "Roadside Assistance",
    },
    {
      icon: "radio",
      text: "Satellite Radio",
    },
    {
      icon: "nest_wifi_router",
      text: "Additional Accessories",
    },
    {
      icon: "battery_full_alt",
      text: "Express Check-in/out",
    },
  ];
  return (
    <div className=" flex flex-col gap-2 bg-[#fff] rounded px-2 py-2 ">
      <h2>Extra Service</h2>
      <div className="divide">
        <div className="divideBorder"></div>
      </div>
      <div className=" grid grid-cols-4 justify-between ">
        {services.map((services, index) => (
          <div className=" flex flex-row gap-2 items-center " key={index}>
            <span className="material-symbols-outlined bg-[#fff] border px-1 py-1 rounded-md ">
              {services.icon}
            </span>
            <h2>{services.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
