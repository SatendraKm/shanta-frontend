import React from "react";
// import { HiOutlineSearch } from "react-icons/hi";

const Header = () => {
  return (
    <header className="bg-gray-100 text-black  h-20 px-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex">
        {/* <input
          type="text"
          placeholder="Search"
          className="bg-white w-auto text-gray-800 p-2 rounded-l-md border-2 focus:outline-none"
        />
        <button className="bg-[#78271F]  text-white px-4 py-1 rounded-r-md focus:outline-none">
          <HiOutlineSearch />
        </button> */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219969.png" // Replace with the path to your avatar image
          alt="Avatar"
          className="w-10 h-10 rounded-full mx-4"
        />
      </div>
    </header>
  );
};

export default Header;
