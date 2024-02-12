import React, { useState } from "react";
import { LOGIN_BG_LOGO, LOGIN_BG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import validationSchema from "../utils/validationSchema";

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
      validationSchema,
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
                  name="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.firstName && errors.firstName && (
                  <div className="text-red-500">{errors.firstName}</div>
                )}
                <input
                  className="p-2 rounded-xl border-2 border-black"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.lastName && errors.lastName && (
                  <div className="text-red-500">{errors.lastName}</div>
                )}
                <div className="relative">
                  <input
                    className="p-2 rounded-xl border-2 border-black w-full"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="black"
                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    viewBox="0 0 16 16"
                    onClick={togglePasswordVisibility}
                    title={showPassword ? "Hide Password" : "Show Password"}
                  >
                    <path
                      d={
                        showPassword
                          ? "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                          : "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM4.5 8a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z"
                      }
                    />
                    {showPassword && (
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                        fillRule="evenodd"
                      />
                    )}
                  </svg>
                </div>
                {touched.password && errors.password && (
                  <div className="text-red-500">{errors.password}</div>
                )}
                <input
                  className="p-2 rounded-xl border-2 border-black"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className="text-red-500">{errors.confirmPassword}</div>
                )}
                <select
                  className="p-2 rounded-xl border-2 border-black"
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
                  <div className="text-red-500">{errors.userType}</div>
                )}
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
