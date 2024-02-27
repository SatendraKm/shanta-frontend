import React, { useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Form4 = () => {
  // const data = [
  //   {
  //     customerName: "Jane Cooper",
  //     totalOutstanding: "₹ 5000",
  //     payingToday: "₹ 3000",
  //     totalAmountRemaining: "₹ 4100",
  //   },
  //   {
  //     customerName: "Floyd Miles",
  //     totalOutstanding: "₹ 5000",
  //     payingToday: "₹ 5000",
  //     totalAmountRemaining: "₹ 1230",
  //   },
  //   {
  //     customerName: "Ronald Richards",
  //     totalOutstanding: "₹ 5000",
  //     payingToday: "₹ 5000",
  //     totalAmountRemaining: "₹ 7896",
  //   },
  //   {
  //     customerName: "Marvin McKinney",
  //     totalOutstanding: "₹ 5000",
  //     payingToday: "₹ 5000",
  //     totalAmountRemaining: "₹ 7531",
  //   },
  //   {
  //     customerName: "Jerome Bell",
  //     totalOutstanding: "₹ 5000",
  //     payingToday: "₹ 5000",
  //     totalAmountRemaining: "₹ 9874",
  //   },
  //   {
  //     customerName: "Kathryn Murphy",
  //     totalOutstanding: "₹ 5000",
  //     payingToday: "₹ 5000",
  //     totalAmountRemaining: "₹ 45632",
  //   },
  //   {
  //     customerName: "Jacob Jones",
  //     totalOutstanding: "₹ 5000",
  //     payingToday: "₹ 5000",
  //     totalAmountRemaining: "₹ 741089",
  //   },
  //   {
  //     customerName: "Kristin Watson",
  //     totalOutstanding: "₹ 5000",
  //     payingToday: "₹ 5000",
  //     totalAmountRemaining: "₹ 321456",
  //   },
  // ];
  const [payingToday, setPayingToday] = useState({
    "Jane Cooper": "₹ 3000",
    "Floyd Miles": "₹ 5000",
    "Ronald Richards": "₹ 5000",
    "Marvin McKinney": "₹ 5000",
    "Jerome Bell": "₹ 5000",
    "Kathryn Murphy": "₹ 5000",
    "Jacob Jones": "₹ 5000",
    "Kristin Watson": "₹ 5000",
  });
  const handleChange = (customerName, value) => {
    setPayingToday({ ...payingToday, [customerName]: value });
  };
  return (
    <>
      <Breadcrumbs>
        <Link to={"/dashboard"} className="opacity-60">
          Dashboard
        </Link>
        <Link to={"/dashboard/Form4"}>Form4</Link>
      </Breadcrumbs>

      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-500 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
              Customer Name
            </th>
            <th className="px-6 py-3 bg-gray-500 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
              Total Outstanding
            </th>
            <th className="px-6 py-3 bg-gray-500 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
              Paying Today
            </th>
            <th className="px-6 py-3 bg-gray-500 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
              Total Amount Remaining
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {Object.entries(payingToday).map(([customerName, value], index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-6 py-4 whitespace-no-wrap">{customerName}</td>
              <td className="px-6 py-4 whitespace-no-wrap">₹ 5000</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleChange(customerName, e.target.value)}
                  className="border rounded px-2 py-1"
                />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">₹ 5000</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form4;
