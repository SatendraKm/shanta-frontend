import { useFormik } from "formik";
import validationSchemaForm from "../utils/validationSchemaForm";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Form1 = () => {
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

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
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
      },
      validationSchema: validationSchemaForm,
      onSubmit: (values) => {
        // Handle form submission logic here
      },
    });

  return (
    <div className="">
      <Breadcrumbs>
        <Link to={"/dashboard"} className="opacity-60">
          Dashboard
        </Link>
        <Link to={"/dashboard/Form1"}>Form1</Link>
      </Breadcrumbs>
      <div className="px-8 w-full">
        <div className="px-2">
          <h2 className="font-bold text-2xl text-[#6A241C]">Form1</h2>
          <h4>Form Description</h4>
        </div>
        <form
          onSubmit={handleSubmit}
          className="m-2 gap-4 gap-y-2 pl-16 grid grid-cols-2 w-3/4 justify-center items-center"
        >
          {formFields.map((field) => (
            <div key={field.name}>
              <div className="flex flex-col">
                <label htmlFor={field.label} className="block text-gray-500">
                  {field.label}
                </label>
                <input
                  className="p-2 rounded-md border border-1 w-72 border-gray-500"
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {touched[field.name] && errors[field.name] && (
                <div className="text-red-500 text-xs px-2">
                  {errors[field.name]}
                </div>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-[#6A241C] col-span-2 w-1/4 mt-4 self-center rounded-xl text-white p-2 hover:scale-105 duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form1;
