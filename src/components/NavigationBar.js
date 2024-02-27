import React from "react";
import AppLogo from "../utils/images/AppLogo.png";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlinePersonPin } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { LuPackageCheck } from "react-icons/lu";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const NavigationBar = () => {
  const location = useLocation();
  return (
    <div className="bg-white w-max-20 h-screen px-2  flex flex-col ">
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
          <FaHome />

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
          <IoPersonAddSharp />

          <p className="px-1 text-sm">Add Customer</p>
        </Link>
        <Link
          to={"/dashboard/form3"}
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white${
            location.pathname === "/dashboard/form3"
              ? "w-full bg-[#6a241c]  rounded-md text-white"
              : ""
          }`}
        >
          <LuPackageCheck />

          <p className="px-1 text-sm">Goods Verification</p>
        </Link>

        <Link
          to={"/dashboard/form2"}
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white${
            location.pathname === "/dashboard/form2"
              ? "w-full bg-[#6a241c]  rounded-md text-white"
              : ""
          }`}
        >
          <MdOutlinePersonPin />

          <p className="px-1 text-sm">Customer Details</p>
        </Link>
        <Link
          to={"/dashboard/form4"}
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white${
            location.pathname === "/dashboard/form4"
              ? "w-full bg-[#6a241c]  rounded-md text-white"
              : ""
          }`}
        >
          <FaMoneyBillTransfer />

          <p className="px-1 text-sm">Payments</p>
        </Link>
        <Link
          to={"/dashboard/form5"}
          className={`flex items-center p-2 w-full hover:bg-[#6a241c]  rounded-md hover:text-white${
            location.pathname === "/dashboard/form5"
              ? "w-full bg-[#6a241c]  rounded-md text-white"
              : ""
          }`}
        >
          <BsBank />

          <p className="px-1 text-sm">Bank Details</p>
        </Link>
      </div>

      {/* Profile Settings and Logout */}
      <div className="mx-1 p-3 border-t-2">
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
