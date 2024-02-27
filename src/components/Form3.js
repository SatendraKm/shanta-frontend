import React from "react";
import { useFormik } from "formik";
import validationSchemaForm from "../utils/validationSchemaForm";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Form3 = () => {
  const formFields = [
    {
      name: "customerName",
      placeholder: "Enter Customer Name",
      type: "text",
      label: "Customer Name",
    },
    {
      name: "itemSummary",
      placeholder: "Enter Item Description",
      type: "text",
      label: "Item Description",
    },
    {
      name: "billNumber",
      placeholder: "Enter Bill Number",
      type: "text",
      label: "Bill Number",
    },
    {
      name: "billDate",
      placeholder: "(dd/mm/yyyy)",
      type: "text",
      label: "Date of Billing",
    },
    {
      name: "billReceivingDate",
      placeholder: "(dd/mm/yyyy)",
      type: "text",
      label: "Date of receiving Bill",
    },
    {
      name: "documentEntryNumber",
      placeholder: "Enter Document Entry Number",
      type: "text",
      label: "Document Entry Number",
    },
    {
      name: "totalBillAmount",
      placeholder: "Enter Total Amount",
      type: "text",
      label: "Total Amount (in ₹)",
    },
    {
      name: "remark",
      placeholder: "Remarks (if any)",
      type: "text",
      label: "Remarks",
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
      itemSummary: "",
      billNumber: "",
      billDate: "",
      billReceivingDate: "", // Initialize billReceivingDate with the same value as billDate
      documentEntryNumber: "",
      totalBillAmount: "",
      remark: "",
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
        <Link to={"/dashboard/Form3"}>Form3</Link>
      </Breadcrumbs>
      <div className="px-8 w-full">
        <div className="px-2">
          <h2 className="font-bold text-2xl  text-[#6A241C]">Form3</h2>
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
            className="bg-[#6A241C] w-1/4 mt-4 self-center rounded-xl text-white p-2 hover:scale-105 duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form3;
