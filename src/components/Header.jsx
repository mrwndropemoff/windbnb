import React from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="flex  laptop:flex-row phone:flex-col max-tablet:mt-5 max-tablet:mb-10 laptop:mt-9 laptop:mb-16">
      <div className="flex-1 phone:mb-7">
        <img
          className=" laptop:h-4 phone:h-5"
          src="/src/assets/images/logo.svg"
          alt="windbnb logo"
        />
      </div>
      <SearchBar />
    </div>
  );
}
