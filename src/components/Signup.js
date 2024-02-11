import { useState } from "react";
import { LOGIN_BG_LOGO, LOGIN_BG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div>
      <div className="relative">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-white opacity-60"></div>

        {/* Background image */}
        <div
          className="bg-cover bg-center min-h-screen flex items-center justify-center"
          style={{ backgroundImage: `url(${LOGIN_BG_URL})` }}
        >
          <div className="bg-white bg-opacity-90 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center relative">
            <div className="md:block hidden w-1/2 border-r-2">
              <img
                className="mx-auto p-4"
                alt="Shop-logo"
                src={LOGIN_BG_LOGO}
              />
              <h2 className="mx-auto text-center p-2">
                serving people with delicious sweets and mouthwatering namkeen
              </h2>
            </div>

            <div className="md:w-1/2 px-8 md:px-16">
              <h2 className="font-bold text-2xl text-[#6A241C]">
                Welcome to shanta
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className=""></div>
                <input
                  className="p-2 mt-8 rounded-xl border-2 border-black"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  className="p-2 rounded-xl border-2 border-black"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <input
                  className="p-2 rounded-xl border-2 border-black"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  className="p-2 rounded-xl border-2 border-black"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <select
                  className="p-2 rounded-xl border-2 border-black"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                >
                  <option value="">Select User</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <button
                  type="submit"
                  className="bg-[#6A241C] rounded-xl text-white py-2 hover:scale-105 duration-300"
                >
                  Sign Up
                </button>
              </form>

              <div className="mt-3 text-xs flex justify-between items-center text-[#6A241C]">
                <p>Already have an account?</p>
                <Link to={"/"}>
                  <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                    Login
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

export default SignUp;
