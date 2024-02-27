import React, { useState } from "react";
import { LOGIN_BG_URL } from "../utils/constants";
import AppLogo from "../utils/images/AppLogo.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import validationSchemaLoginSignup from "../utils/validationSchemaLoginSignup";

const SignUp = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        userType: "", // Set initial value to an empty string
      },
      validationSchema: validationSchemaLoginSignup,
      onSubmit: (values) => {
        // Handle form submission logic here
        // Example: Make an API request
        // axios.post('/api/form', values)
        //   .then(response => {
        //     console.log("Form submitted successfully:", response.data);
        //   })
        //   .catch(error => {
        //     console.error("Error submitting form:", error);
      },
    });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
                serving people with delicious sweets and mouthwatering namkeen
              </h2>
            </div>
            <div className="md:w-1/2 px-8 md:px-16">
              <h2 className="font-bold text-2xl text-[#6A241C]">
                Welcome to shanta
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    className="p-2 mt-8 w-full rounded-md border-2 border-black"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.firstName && errors.firstName && (
                    <div className="text-red-500 text-xs px-2">
                      {errors.firstName}
                    </div>
                  )}
                </div>
                <div>
                  <input
                    className="p-2 rounded-md w-full border-2 border-black"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lastName && errors.lastName && (
                    <div className="text-red-500 text-xs px-2">
                      {errors.lastName}
                    </div>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <input
                      className="p-2 rounded-md border-2 border-black w-full"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <button
                      className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {touched.password && errors.password && (
                    <div className="text-red-500 text-xs px-2">
                      {errors.password}
                    </div>
                  )}
                </div>
                <div>
                  <input
                    className="p-2 rounded-md w-full border-2 border-black"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <div className="text-red-500 text-xs px-2">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <div>
                  <select
                    className="p-2 rounded-md w-full border-2 border-black"
                    name="userType"
                    value={values.userType}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select User
                    </option>
                    <option value="Manager">Manager</option>
                    <option value="Employee">Employee</option>
                  </select>

                  {touched.userType && errors.userType && (
                    <div className="text-red-500 text-xs px-2">
                      {errors.userType}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-[#6A241C] w-1/2 self-center rounded-xl text-white p-2 hover:scale-105 duration-300"
                >
                  Sign Up
                </button>
              </form>
              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400" />
              </div>
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
