import "./App.css";
import Description from "./components/Description";
import Features from "./components/Features";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Specifications from "./components/Specifications";

function App() {
  return (
    <>
      <Nav />
      <div className=" h-[30vh] flex flex-col justify-center items-center bg-[#1e1e1e] text-[#fff] ">
        <h1>Chevrolet Camaro</h1>
        <h2>Home / Listings / Chevrolet Camaro</h2>
      </div>

      <div className=" w-full h-[20vh] flex flex-row items-center justify-between px-20 shadow-lg ">
        <div className=" h-full flex flex-col justify-center ">
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
          <div className=" rounded-md flex items-center justify-center px-4 py-2 bg-[#093734] ">
            <h2>Total Booking : 300</h2>
          </div>
          <button className=" outline-none rounded-md flex items-center justify-center px-4 py-2 bg-[gray] hover:bg-[#093734] ">
            <h2>Compare</h2>
          </button>
        </div>
      </div>

      <div className=" w-full h-full px-24 py-10 grid grid-cols-3 gap-5 bg-[ghostwhite] ">
        <div className=" w-full h-full grid gap-4 col-span-2 ">
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

            <div className=" w-full h-[60vh] bg-[#1f1f1f] "></div>
          </div>

          <Services />

          <Description />

          <Specifications />

          <Features />

          <div className=" flex flex-col gap-4 bg-[#fff] rounded px-2 py-2 ">
            <h2>Video</h2>
            <div className="divide">
              <div className="divideBorder"></div>
            </div>
            <iframe
              src="https://www.youtube.com/embed/ExJZAegsOis"
              className=" w-full h-[50vh] "
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className=" grid col-span-1 bg-[#fff] px-2 py-2 ">
          <div className=" px-2 py-1 rounded-md bg-[#00800022] text-[#00800097] ">
            <h2>4.2 Km Away</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
