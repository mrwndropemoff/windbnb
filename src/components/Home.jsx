import React from "react";

export default function Home(props) {
  const { data } = props;
  return (
    <div className="flex flex-col my-5">
      <img src={data.photo} className="w-full h-[267px] rounded-3xl" />
      <div className="flex flex-row my-5">
        <p className="flex-1 font-medium text-sm text-gray ">{data.type}</p>
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
      <p className="font-semibold text-base">{data.title}</p>
    </div>
  );
}
