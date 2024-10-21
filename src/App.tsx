import "./App.css";

import Booking from "./components/Booking";
import CarDetails from "./components/CarDetails";
import ContactDetails from "./components/ContactDetails";
import Description from "./components/Description";
import Features from "./components/Features";
import Nav from "./components/Nav";
import PricingDetails from "./components/PricingDetails";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Slideshow from "./components/Slideshow";
import Specifications from "./components/Specifications";
import VideoFrame from "./components/VideoFrame";

function App() {
  return (
    <div className="relative">
      <Nav />
      <div className=" min-h-[40vh] h-full lg:h-[40vh] flex flex-col justify-center items-center bg-[#1e1e1e] text-[#fff] ">
        <h1>Chevrolet Camaro</h1>
        <h2>Home / Listings / Chevrolet Camaro</h2>
      </div>

      <CarDetails />

      <div className=" w-full h-full px-4 lg:px-24 py-10 flex flex-col lg:grid lg:grid-cols-3 gap-5 bg-[ghostwhite] relative ">
        <div className=" maingrid w-full h-full grid gap-4 col-span-2 ">
          <div className=" flex flex-col gap-4 bg-[#fff] rounded px-2 py-2 ">
            <div className=" w-full flex flex-row items-center justify-between ">
              <div className=" px-2 py-1 rounded-md bg-[#00800022] text-[#00800097] ">
                <h2>4.2 Km Away</h2>
              </div>
              <div className=" flex flex-row items-center gap-4 ">
                <h2 className="">Airport delivery</h2>
                <h2>|</h2>
                <h2 className="">Home delivery</h2>
              </div>
            </div>

            <div className=" w-full ">
              <Slideshow />
            </div>
          </div>

          <Services />

          <Description />

          <Specifications />

          <Features />

          <VideoFrame />

          <Reviews />
        </div>

        <div className="sidegrid grid col-span-1 relative">
          <div className=" flex flex-col gap-4 sticky top-4  ">
            <PricingDetails />

            <Booking />

            <ContactDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
