import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import { useFormik } from "formik";
// import validationSchemaForm from "../utils/validationSchemaForm";

const Form2 = () => {
  // const formFields = [
  //   {
  //     name: "customerName",
  //     label: "Customer Name",
  //     type: "text",
  //     readonly: true,
  //   },
  //   {
  //     name: "gstin",
  //     label: "GSTIN-",
  //     type: "text",
  //     readonly: true,
  //   },
  //   {
  //     name: "panNumber",
  //     label: "PAN No.",
  //     type: "text",
  //     readonly: true,
  //   },
  //   {
  //     name: "billNumber",
  //     label: "Bill No.",
  //     type: "text",
  //     readonly: true,
  //   },
  //   {
  //     name: "billDate",
  //     label: "Bill Date",
  //     type: "text",
  //     readonly: true,
  //   },
  //   {
  //     name: "billReceivingDate",
  //     label: "Bill Receiving Date",
  //     type: "text",
  //     readonly: false, // This field is changeable
  //   },
  //   {
  //     name: "billEntryDate",
  //     label: "Bill Entry Date",
  //     type: "text",
  //     readonly: false, // This field is changeable
  //   },
  //   {
  //     name: "documentEntryNumber",
  //     label: "Document Entry Number",
  //     type: "select",
  //     options: ["Option 1", "Option 2", "Option 3"], // Example options, replace with actual options
  //     readonly: false, // This field is changeable
  //   },
  //   {
  //     name: "totalBillAmount",
  //     label: "Total Bill Amount",
  //     type: "text",
  //     readonly: false, // This field is changeable
  //   },
  // ];

  // Initialize Formik form
  // const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
  //   useFormik({
  //     initialValues: {
  //       customerName: "", // Initialize with data fetched from elsewhere or pass as props
  //       gstin: "", // Initialize with data fetched from elsewhere or pass as props
  //       panNumber: "", // Initialize with data fetched from elsewhere or pass as props
  //       billNumber: "", // Initialize with data fetched from elsewhere or pass as props
  //       billDate: "", // Initialize with data fetched from elsewhere or pass as props
  //       billReceivingDate: "", // Initialize with data fetched from elsewhere or pass as props
  //       billEntryDate: "", // Initialize with data fetched from elsewhere or pass as props
  //       documentEntryNumber: "", // Initialize with default value or pass as props
  //       totalBillAmount: "", // Initialize with data fetched from elsewhere or pass as props
  //     },
  //     validationSchema: validationSchemaForm,
  //     onSubmit: (values) => {
  //       // Handle form submission logic here
  //     },
  //   });
  const data = [
    {
      customerName: "Jane Cooper",
      gstinPan: "123456",
      billNumber: "123456",
      billDate: "15/02/2004",
      billReceivingDate: "15/02/2004",
      billEntryDate: "15/02/2004",
      totalBillAmount: "₹ 4100",
    },
    {
      customerName: "Floyd Miles",
      gstinPan: "123456",
      billNumber: "123456",
      billDate: "15/02/2004",
      billReceivingDate: "15/02/2004",
      billEntryDate: "15/02/2004",
      totalBillAmount: "₹ 1230",
    },
    {
      customerName: "Ronald Richards",
      gstinPan: "123456",
      billNumber: "123456",
      billDate: "15/02/2004",
      billReceivingDate: "15/02/2004",
      billEntryDate: "15/02/2004",
      totalBillAmount: "₹ 7896",
    },
    {
      customerName: "Marvin McKinney",
      gstinPan: "123456",
      billNumber: "789456",
      billDate: "15/02/2004",
      billReceivingDate: "15/02/2004",
      billEntryDate: "15/02/2004",
      totalBillAmount: "₹ 7531",
    },
    {
      customerName: "Jerome Bell",
      gstinPan: "123456",
      billNumber: "741852",
      billDate: "15/02/2004",
      billReceivingDate: "15/02/2004",
      billEntryDate: "15/02/2004",
      totalBillAmount: "₹ 9874",
    },
    {
      customerName: "Kathryn Murphy",
      gstinPan: "123456",
      billNumber: "741085",
      billDate: "15/02/2004",
      billReceivingDate: "15/02/2004",
      billEntryDate: "15/02/2004",
      totalBillAmount: "₹ 45632",
    },
    {
      customerName: "Jacob Jones",
      gstinPan: "123456",
      billNumber: "026789",
      billDate: "15/02/2004",
      billReceivingDate: "15/02/2004",
      billEntryDate: "15/02/2004",
      totalBillAmount: "₹ 741089",
    },
    {
      customerName: "Kristin Watson",
      gstinPan: "123456",
      billNumber: "963123",
      billDate: "15/02/2004",
      billReceivingDate: "15/02/2004",
      billEntryDate: "15/02/2004",
      totalBillAmount: "₹ 321456",
    },
  ];

  return (
    <>
      <Breadcrumbs>
        <Link to={"/dashboard"} className="opacity-60">
          Dashboard
        </Link>
        <Link to={"/dashboard/Form2"}>Form2</Link>
      </Breadcrumbs>
      <div className="px-8 w-full">
        <div className="px-2">
          <h2 className="font-bold text-2xl text-[#6A241C]">Form2</h2>
          <h4>Form Description</h4>
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                GSTIN/PAN
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Bill Number
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Bill Date
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Bill Receiving Date
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Bill Entry Date
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Total Bill Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 whitespace-no-wrap">
                  {row.customerName}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{row.gstinPan}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {row.billNumber}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{row.billDate}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {row.billReceivingDate}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {row.billEntryDate}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {row.totalBillAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form2;
