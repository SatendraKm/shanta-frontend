import { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const BillEntry = () => {
  const [customerNames, setCustomerNames] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetchCustomerNames();
  }, []);

  const fetchCustomerNames = async () => {
    try {
      const response = await axios.get(
        "http://44.212.65.125:3000/api/customers_with_bills"
      );
      const customers = response.data.customersWithBills;
      setCustomerNames(customers);
    } catch (error) {
      console.error("Error fetching customer names:", error);
    }
  };

  const initialValues = {
    name: "",
    itemSummary: "",
    billNo: "",
    billDate: "",
    billReceivingDate: "",
    denNo: "",
    totalBillAmount: "",
    remark: "",
    itemMatched: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Customer Name is required"),
    itemSummary: Yup.string().required("Item Summary is required"),
    billNo: Yup.string().required("Bill No. is required"),
    billDate: Yup.date().required("Bill Date is required"),
    billReceivingDate: Yup.date().required("Bill Receiving Date is required"),
    denNo: Yup.string().required("DEN No. is required"),
    totalBillAmount: Yup.number().required("Total Bill Amount is required"),
    remark: Yup.string(),
    itemMatched: Yup.boolean(),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        "http://44.212.65.125:3000/api/customers_bill",
        values
      );
      console.log("Customer bill entry added successfully:", response.data);
      setShowAlert(true);
      resetForm();
    } catch (error) {
      console.error("Error adding customer bill entry:", error);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };
  const formFields = [
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
  return (
    <>
      <Breadcrumbs>
        <Link to={"/dashboard"} className="opacity-60">
          Dashboard
        </Link>
        <Link to={"/dashboard/BillEntry"}>Bill Entry</Link>
      </Breadcrumbs>
      <div className="lg:flex lg:items-center w-[70%] lg:justify-between">
        <div className="px-4 lg:px-8 w-full lg:w-full">
          <div className="px-2">
            <h2 className="font-bold text-2xl text-[#6A241C]">Bill Entry</h2>
            <h4>Please enter the following Details</h4>
          </div>
          <div className="w-full">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="p-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  <div className="flex flex-col m-2 items-start">
                    <label htmlFor="name" className="block text-gray-500">
                      Customer Name
                    </label>
                    <Field
                      as="select"
                      name="name"
                      className="p-2 rounded-md border border-1 w-full lg:w-72 border-gray-500"
                    >
                      <option value="" disabled>
                        Select Customer Name
                      </option>
                      {customerNames.map((customer) => (
                        <option key={customer.id} value={customer.id}>
                          {customer.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-xs px-2"
                    />
                  </div>

                  {/* Add similar Field components for other form fields */}
                  {formFields.map((field) => (
                    <div
                      key={field.name}
                      className="flex flex-col m-2 items-start"
                    >
                      {field.type !== "checkbox" && (
                        <label
                          htmlFor={field.name}
                          className="block text-gray-500"
                        >
                          {field.label}
                        </label>
                      )}
                      {field.type === "checkbox" ? (
                        <div className="flex items-center">
                          <Field
                            type="checkbox"
                            name={field.name}
                            id={field.name}
                            className="form-checkbox h-5 w-5 focus:outline-none"
                          />
                          <label
                            htmlFor={field.name}
                            className="ml-2 text-gray-500"
                          >
                            {field.label}
                          </label>
                        </div>
                      ) : field.type === "textarea" ? (
                        <Field
                          as="textarea"
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          placeholder={field.placeholder}
                          className="p-2 rounded-md border border-1 w-full lg:w-72 border-gray-500"
                        />
                      ) : (
                        <Field
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          placeholder={field.placeholder}
                          className="p-2 rounded-md border border-1 w-full lg:w-72 border-gray-500"
                        />
                      )}
                      <ErrorMessage
                        name={field.name}
                        component="div"
                        className="text-red-500 text-xs px-2"
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="bg-[#6A241C] lg:col-span-2 md:col-span-2 w-1/4 m-auto rounded-xl text-white p-2 hover:scale-105 duration-300"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
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
                        Customer bill entry added successfully.
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

export default BillEntry;
