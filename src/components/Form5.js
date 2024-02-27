import React from "react";
import { useFormik } from "formik";
import validationSchemaForm from "../utils/validationSchemaForm";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Form5 = () => {
  const formFields = [
    {
      name: "bankName",
      placeholder: "Enter Bank Name",
      type: "text",
      label: "Bank Name",
    },
    {
      name: "accountName",
      placeholder: "Enter Account Name",
      type: "text",
      label: "Account Name",
    },
    {
      name: "accountNumber",
      placeholder: "Enter Account Number",
      type: "text",
      label: "Account Number",
    },
    {
      name: "IFSC",
      placeholder: "Enter IFSC code",
      type: "text",
      label: "IFSC",
    },
    {
      name: "checkBookNumber",
      placeholder: "Enter Checkbook Number",
      type: "text",
      label: "Checkbook Number",
    },
    {
      name: "chequeNumber",
      placeholder: "Enter cheque Number",
      type: "text",
      label: "Cheque Number",
    },
    {
      name: "chequeDate",
      placeholder: "Enter cheque Date",
      type: "text",
      label: "Cheque Date",
    },
    {
      name: "chequeAmount",
      placeholder: "Enter cheque Amount",
      type: "text",
      label: "Cheque Amount",
    },
  ];

  // Initialize Formik form
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      customerName: "",
    },
    validationSchema: validationSchemaForm,
    onSubmit: (values) => {
      // Handle form submission logic here
    },
  });

  // Update billReceivingDate when billDate changes
  const handleBillDateChange = (event) => {
    const { value } = event.target;
    setFieldValue("billDate", value);
    setFieldValue("billReceivingDate", value); // Set billReceivingDate to the same value as billDate
  };

  return (
    <>
      <Breadcrumbs>
        <Link to={"/dashboard"} className="opacity-60">
          Dashboard
        </Link>
        <Link to={"/dashboard/Form3"}>Form5</Link>
      </Breadcrumbs>
      <div className="px-8 w-full">
        <div className="px-2">
          <h2 className="font-bold text-2xl  text-[#6A241C]">Form5</h2>
          <h4>Form Description</h4>
        </div>
        <form
          onSubmit={handleSubmit}
          className="m-2 gap-4 gap-y-2 grid grid-cols-2 w-1/2 justify-center items-center"
        >
          {formFields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.label} className="block  text-gray-500">
                {field.label}
              </label>
              <input
                className="p-2 rounded-md border border-1 w-72 border-gray-500"
                type={field.type}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={
                  field.name === "billDate"
                    ? handleBillDateChange
                    : handleChange
                }
                onBlur={handleBlur}
              />
              {touched[field.name] && errors[field.name] && (
                <div className="text-red-500 text-xs px-2">
                  {errors[field.name]}
                </div>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-[#6A241C] w-1/4 mt-4 self-center col-span-2 rounded-xl text-white p-2 hover:scale-105 duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form5;
