import { useFormik } from "formik";
import validationSchemaForm from "../utils/validationSchemaForm";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const AddCustomer = () => {
  const formFields = [
    {
      name: "customerName",
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
      name: "contactNumber",
      placeholder: "Enter Contact Number",
      type: "tel",
      label: "Contact",
    },
    {
      name: "email",
      placeholder: "Enter Email",
      type: "email",
      label: "E-mail",
    },
    {
      name: "gstin",
      placeholder: "Enter GSTIN Number",
      type: "text",
      label: "GSTIN ",
    },
    {
      name: "panNumber",
      placeholder: "Enter PAN",
      type: "text",
      label: "PAN",
    },
    {
      name: "bankName",
      placeholder: "Enter Bank Name",
      type: "text",
      label: "Bank Name",
    },
    {
      name: "accountNumber",
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
      name: "ifscCode",
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

  const initialValues = {
    customerName: "",
    address: "",
    contactNumber: "",
    email: "",
    gstin: "",
    panNumber: "",
    bankName: "",
    accountNumber: "",
    accountName: "",
    ifscCode: "",
    branchName: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    try {
      // Perform any async operations here, such as API requests
      console.log("Submitting form...", values);

      // Simulate an async operation with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset the form after successful submission
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validationSchemaForm,
      onSubmit,
    });

  return (
    <>
      <Breadcrumbs>
        <Link to={"/dashboard"} className="opacity-60">
          Dashboard
        </Link>
        <Link to={"/dashboard/AddCustomer"}>Add Customer</Link>
      </Breadcrumbs>
      <div className=" lg:flex lg:items-center w-100% lg:justify-between">
        <div className="px-4 lg:px-8 w-100% lg:w-100%">
          <div className="px-2">
            <h2 className="font-bold text-2xl text-[#6A241C]">
              Add a new Customer
            </h2>
            <h4>Please fill out the following Details</h4>
          </div>
          <div className="w-100%">
            <form
              onSubmit={handleSubmit}
              className="p-4 w-100% grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
            >
              {formFields.map((field) => (
                <div key={field.name}>
                  <div className="flex flex-col m-2 items-start">
                    <label
                      htmlFor={field.label}
                      className="block text-gray-500"
                    >
                      {field.label}
                    </label>
                    <input
                      className="p-2 rounded-md border border-1 w-full lg:w-72 border-gray-500"
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      placeholder={field.placeholder}
                      value={values[field.name]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched[field.name] && errors[field.name] && (
                      <div className="text-red-500 text-xs px-2">
                        {errors[field.name]}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="bg-[#6A241C] lg:col-span-2 md:col-span-2 w-1/2 lg:w-1/4 md:w-1/4  m-auto rounded-xl text-white p-2 hover:scale-105 duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
