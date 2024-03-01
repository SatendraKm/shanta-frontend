import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import validationSchemaForm from "../utils/validationSchemaForm";

const BillEntry = () => {
  const formFields = [
    {
      name: "customerName",
      label: "Customer Name",
      type: "select",
      options: ["Option 1", "Option 2", "Option 3"],
      placeholder: "Select Customer Name",
    },
    {
      name: "itemSummary",
      label: "Item Summary",
      type: "text",
      placeholder: "Enter Item Summary",
    },
    {
      name: "billNo",
      label: "Bill No.",
      type: "text",
      placeholder: "Enter Bill No.",
    },
    {
      name: "billDate",
      label: "Bill Date",
      type: "date",
      placeholder: "Select Bill Date",
    },
    {
      name: "billReceivingDate",
      label: "Bill Receiving Date",
      type: "date",
      placeholder: "Select Bill Receiving Date",
    },
    {
      name: "denNo",
      label: "DEN No.",
      type: "text",
      placeholder: "Enter DEN No.",
    },
    {
      name: "totalBillAmount",
      label: "Total Bill Amount (₹)",
      type: "text",
      placeholder: "Enter Total Bill Amount",
    },
    {
      name: "remark",
      label: "Remark",
      type: "textarea",
      placeholder: "Enter Remark",
    },
    {
      name: "itemMatched",
      label: "Item Matched",
      type: "checkbox",
    },
  ];

  const initialValues = {
    customerName: "",
    itemSummary: "",
    billNumber: "",
    billDate: "",
    billReceivingDate: "",
    documentEntryNumber: "",
    totalBillAmount: "",
    itemMatched: false,
    remark: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
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
        <Link to={"/dashboard/BillEntry"}>Bill Entry</Link>
      </Breadcrumbs>
      <div className="lg:flex lg:items-center lg:justify-between ">
        <div className="px-4 lg:px-8 w-full lg:w-[90%]">
          <div className="px-2">
            <h2 className="font-bold text-2xl text-[#6A241C]">Bill Entry</h2>
            <h4>Please enter the following Details</h4>
          </div>
          <div className="w-full ">
            <form
              onSubmit={formik.handleSubmit}
              className="p-4 xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
            >
              {formFields.map((field) => (
                <div key={field.name}>
                  <div className="flex flex-col m-2 items-start">
                    {field.type !== "checkbox" && (
                      <label
                        htmlFor={field.name}
                        className="block text-gray-500"
                      >
                        {field.label}
                      </label>
                    )}
                    {field.type === "select" && (
                      <select
                        className="p-2 rounded-md border border-1 w-full lg:w-72 border-gray-500"
                        name={field.name}
                        id={field.name}
                        value={formik.values[field.name]}
                        onChange={formik.handleChange}
                        placeholder={field.placeholder}
                      >
                        <option value="" disabled>
                          {field.placeholder}
                        </option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                    {field.type === "checkbox" && (
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id={field.name}
                          name={field.name}
                          checked={formik.values[field.name]}
                          onChange={formik.handleChange}
                          className="form-checkbox h-5 w-5 focus:outline-none"
                        />
                        <label
                          htmlFor={field.name}
                          className="ml-2 block text-gray-500"
                        >
                          {field.label}
                        </label>
                      </div>
                    )}
                    {field.type !== "select" && field.type !== "checkbox" && (
                      <input
                        className="p-2 rounded-md border border-1 w-full lg:w-72 border-gray-500"
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        placeholder={field.placeholder}
                        value={formik.values[field.name]}
                        onChange={formik.handleChange}
                      />
                    )}
                    {formik.touched[field.name] &&
                      formik.errors[field.name] && (
                        <div className="text-red-500 text-xs px-2">
                          {formik.errors[field.name]}
                        </div>
                      )}
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="bg-[#6A241C] lg:col-span-2 md:col-span-2 w-1/2 lg:w-1/4 md:w-1/4 m-auto rounded-xl text-white p-2 hover:scale-105 duration-300"
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

export default BillEntry;
