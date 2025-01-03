import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

const FacililyTab = () => {
  return (
    <div className="w-full m-auto bg-gray-300 p-20">
      <div className=" max-w-7xl m-auto">
        <div className=" flex items-center justify-evenly">
          <Tabs
            icon={<CiDeliveryTruck size={50} />}
            name={"Refund"}
            subText={"Get refund within 3 days"}
          />
          <Tabs
            icon={<IoIosCall size={50} />}
            name={"24/7 Support"}
            subText={"Get rSupport all day"}
          />
        </div>
      </div>
    </div>
  );
};

const Tabs = ({ icon, name, subText }) => {
  return (
    <div className=" flex items-center gap-10">
      <div className=" text-orange-500 border rounded-full p-2 border-orange-500">
        {icon}
      </div>
      <div className=" space-y-5">
        <h1 className=" text-2xl text-black">{name}</h1>
        <p className=" text-gray-500">{subText}</p>
      </div>
    </div>
  );
};

export default FacililyTab;
