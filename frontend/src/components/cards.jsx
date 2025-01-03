import React from "react";

const cards = ({ imgSrc, name, details }) => {
  return (
    <div className=" p-2 rounded-lg h-[300px] w-[150px] shadow-lg hover:shadow-xl">
      <img src={imgSrc} alt="image-com" className=" w-full h-[80px]" />
      {/* details */}
      <h1 className=" text-4xl text-black ">{name}</h1>
      <p className="text-justify">{details}</p>
    </div>
  );
};

export default cards;
