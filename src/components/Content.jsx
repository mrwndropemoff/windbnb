import React from "react";
import Home from "./Home";
import data from "../../stays.json";

export default function Content() {
  return (
    <div className="flex flex-col h-2/3 w-full">
      <div className="flex flex-row items-center laptop:pb-5 max-tablet:pb-1">
        <p className="font-bold laptop:text-2xl max-tablet:text-lg flex-1 text-black">
          Stays in Finland
        </p>
        <p className="font-medium text-sm text-[#4F4F4F]">
          {data.length - 1}+ Stays
        </p>
      </div>
      <div className="grid laptop:grid-cols-3 phone:grid-flow-col-1 max h-full gap-x-8 gap-y-2">
        {data.map((house) => (
          <Home data={house} />
        ))}
      </div>
    </div>
  );
}
