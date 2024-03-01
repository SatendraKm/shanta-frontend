import React from "react";
import AppLogo from "../utils/images/AppLogo.png";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlinePersonPin } from "react-icons/md";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { BsBank } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { RiBillLine } from "react-icons/ri";

const NavigationBar = ({ isNavVisible }) => {
  const location = useLocation();
  return (
    <div
      className={`bg-white w-max-20 h-screen px-2 flex flex-col ${
        isNavVisible ? "" : "hidden md:flex lg:flex"
      }`}
    >
      <div className="p-2 flex justify-center ">
        <img src={AppLogo} alt="Logo" className="w-[230px]" />
      </div>
      <p className="mx-1 mt-4 font-bold">MENU</p>
      {/* Fields */}
      <div className="flex flex-col justify-start  flex-auto pl-1 gap-1">
        {/* Your fields go here */}
        <Link
          to={"/dashboard"}
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white${
            location.pathname === "/dashboard"
              ? "w-full bg-[#6a241c]  rounded-md text-white"
              : ""
          }`}
        >
          <IoHomeOutline />

          <p className="px-1 text-sm">Home</p>
        </Link>
        <Link
          to={"/dashboard/AddCustomer"}
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white${
            location.pathname === "/dashboard/AddCustomer"
              ? "w-full bg-[#6a241c]  rounded-md text-white"
              : ""
          }`}
        >
          <IoPersonAddOutline />

          <p className="px-1 text-sm">Add Customer</p>
        </Link>
        <Link
          to={"/dashboard/BillEntry"}
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white${
            location.pathname === "/dashboard/BillEntry"
              ? "w-full bg-[#6a241c]  rounded-md text-white"
              : ""
          }`}
        >
          <RiBillLine />

          <p className="px-1 text-sm">Bill Entry</p>
        </Link>

        <Link
          to={"/dashboard/CustomerDetails"}
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white${
            location.pathname === "/dashboard/CustomerDetails"
              ? "w-full bg-[#6a241c]  rounded-md text-white"
              : ""
          }`}
        >
          <MdOutlinePersonPin />

          <p className="px-1 text-sm">Customer Details</p>
        </Link>
        <Link
          to={"/dashboard/Payments"}
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white${
            location.pathname === "/dashboard/Payments"
              ? "w-full bg-[#6a241c]  rounded-md text-white"
              : ""
          }`}
        >
          <LiaMoneyBillWaveSolid />

          <p className="px-1 text-sm">Payments</p>
        </Link>
        <Link
          to={"/dashboard/BankDetails"}
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white${
            location.pathname === "/dashboard/BankDetails"
              ? "w-full bg-[#6a241c]  rounded-md text-white"
              : ""
          }`}
        >
          <BsBank />

          <p className="px-1 text-sm">Bank Details</p>
        </Link>
      </div>

      {/* Profile Settings and Logout */}
      <div className="mx-1 p-3 mt-2 border-t-2">
        <button
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white`}
        >
          <CgProfile />
          <p className="px-2 text-sm">Profile</p>
        </button>
        <button
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white`}
        >
          <IoSettingsOutline />
          <p className="px-2 text-sm">Settings</p>
        </button>
        <button
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white`}
        >
          <IoIosLogOut />
          <p className="px-2 text-sm">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
