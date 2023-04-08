import React from "react";

export default function Home(props) {
  const { data } = props;
  return (
    <div className="flex flex-col my-5">
      <img src={data.photo} className="w-full h-[267px] rounded-3xl" />
      <div className="flex flex-row my-5 justify-center items-center">
        {data.superHost ? (
          <p className="border-[1px] border-[#4F4F4F] rounded-xl h-7 w-24 flex items-center justify-center mr-3 font-bold text-xs text-[#4F4F4F]">
            SUPER HOST
          </p>
        ) : null}
        <div className="flex-1 ">
          <div className="flex items-center text-gray text-sm">
            <p className="flex font-medium">{data.type}</p>
            {data.beds && (
              <p className="ml-1 items-center">. {data.beds} beds</p>
            )}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#EB5757"
          className="w-4 h-[15.88px] fill-[#EB5757] mt-0.5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <p className="font-medium text-sm text-rating-gray">{data.rating}</p>
      </div>
      <p className="font-bold text-base">{data.title}</p>
    </div>
  );
}
