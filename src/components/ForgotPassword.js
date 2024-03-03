import React from "react";
import { LOGIN_BG_URL } from "../utils/constants";
import AppLogo from "../utils/images/AppLogo.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-white opacity-60"></div>
        <div
          className="bg-cover bg-center min-h-screen flex items-center justify-center"
          style={{ backgroundImage: `url(${LOGIN_BG_URL})` }}
        >
          <div className="bg-white bg-opacity-90 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center relative">
            <div className="md:block hidden w-1/2 border-r-2">
              <img className="mx-auto p-4" alt="Shop-logo" src={AppLogo} />
              <h2 className="mx-auto text-center p-2">
                Serving people with delicious sweets and mouthwatering namkeen
              </h2>
            </div>
            <div className="md:w-1/2 px-8 md:px-16">
              <h2 className="font-bold text-2xl text-[#6A241C]">
                Forgot Password
              </h2>
              <p className="mt-4 text-[#000000]">
                Please contact the admin to reset your password.
              </p>
              <div className="mt-6 text-xs flex justify-between items-center text-[#6A241C]">
                <Link to={"/"}>
                  <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                    Back to Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
