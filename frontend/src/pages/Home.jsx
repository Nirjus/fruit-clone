import React from "react";
import Header from "../components/Header";
import heroImg from "../assets/images/fresh-fruits.jpg";
import FacililyTab from "../components/facilityTab";

export default function HomePage() {
  return (
    <div className=" w-full min-h-screen h-auto relative">
      <Header selectTab={0} />
      {/* Hero section */}
      <img
        src={heroImg}
        alt="hero-image"
        className=" w-full sticky top-0 left-0 h-screen -z-20 "
      />
      <div className="  absolute top-0 left-0 z-10 h-screen flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center ">
          <h1 className=" text-8xl font-extrabold text-white text-center p-10 ">
            Fresh & Organic Delicious Seasonal Fruits
          </h1>
          <div className=" mt-10 flex items-center gap-10 ">
            <button className=" bg-orange-500 hover:bg-black text-white rounded-3xl p-5">
              Fruit collection
            </button>
            <button className=" border-2 hover:bg-orange-500 border-orange-500 text-white rounded-3xl p-5">
              Fruit collection
            </button>
          </div>
        </div>
      </div>
      <FacililyTab />
      {/* cards */}
      <div className=" bg-white p-4 ">
        <div className=" mt-20 ">
          <h1 className=" text-3xl text-orange-500 text-center">
            Our Products
          </h1>
          <p className=" mt-10 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            fuga quas itaque eveniet beatae optio.
          </p>
        </div>
      </div>
    </div>
  );
}
