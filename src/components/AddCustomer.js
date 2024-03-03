import { useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddCustomer = () => {
  const formFields = [
    {
      name: "name",
      placeholder: "Enter Customer Name",
      type: "text",
      label: "Customer name",
    },
    {
      name: "address",
      placeholder: "Enter Address",
      type: "text",
      label: "Address",
    },
    {
      name: "contactNos",
      placeholder: "Enter Contact Number",
      type: "tel",
      label: "Contact",
    },
    {
      name: "email",
      placeholder: "Enter email",
      type: "email",
      label: "E-mail",
    },
    {
      name: "gstinPan",
      placeholder: "Enter GSTIN / Pan Number",
      type: "text",
      label: "GSTIN / PAN ",
    },
    {
      name: "bankName",
      placeholder: "Enter Bank Name",
      type: "text",
      label: "Bank Name",
    },
    {
      name: "accountNo",
      placeholder: "Enter Account Number",
      type: "text",
      label: "Account Number",
    },
    {
      name: "accountName",
      placeholder: "Enter Account Name",
      type: "text",
      label: "Account Name",
    },
    {
      name: "ifsc",
      placeholder: "Enter IFSC Code",
      type: "text",
      label: "IFSC code",
    },
    {
      name: "branchName",
      placeholder: "Enter Branch Name",
      type: "text",
      label: "Branch name",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = async (values) => {
    try {
      // Make POST request to add customer
      const response = await axios.post(
        "http://44.212.65.125:3000/api/customers",
        values
      );

      // Handle success response
      console.log("Customer added successfully:", response.data);

      // Show alert
      setShowAlert(true);

      // Reset form
      reset();
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Breadcrumbs>
        <Link to={"/dashboard"} className="opacity-60">
          Dashboard
        </Link>
        <Link to={"/dashboard/AddCustomer"}>Add Customer</Link>
      </Breadcrumbs>
      <div className="lg:flex lg:items-center w-[70%] lg:justify-between">
        <div className="px-4 lg:px-8 w-full lg:w-full">
          <div className="px-2">
            <h2 className="font-bold text-2xl text-[#6A241C]">
              Add a new Customer
            </h2>
            <h4>Please fill out the following Details</h4>
          </div>
          <div className="w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
            >
              {formFields.map((field) => (
                <div key={field.name} className="flex flex-col m-2 items-start">
                  <label htmlFor={field.name} className="block text-gray-500">
                    {field.label}
                  </label>
                  <input
                    {...register(field.name, {
                      required: `${field.label} is required`,
                    })}
                    className="p-2 rounded-md border border-1 w-full lg:w-72 border-gray-500"
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                  />
                  {errors[field.name] && (
                    <div className="text-red-500 text-xs px-2">
                      {errors[field.name].message}
                    </div>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="bg-[#6A241C] lg:col-span-2 md:col-span-2 w-1/4 m-auto rounded-xl text-white p-2 hover:scale-105 duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {showAlert && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Success!
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Customer added successfully.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={closeAlert}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCustomer;
