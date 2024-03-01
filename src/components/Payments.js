import React, { useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

const Payments = () => {
  // Sample data for payments
  const [payments, setPayments] = useState([
    {
      id: 1,
      customerName: "Customer A",
      denNo: "DEN1",
      billNo: "001",
      billAmt: 1000,
      paymentDate: "2024-02-28",
      paidAmt: 500,
      runningBalance: 500,
      isSelected: false,
    },
    {
      id: 2,
      customerName: "Customer B",
      denNo: "DEN2",
      billNo: "002",
      billAmt: 1500,
      paymentDate: "2024-02-27",
      paidAmt: 1500,
      runningBalance: 0,
      isSelected: false,
    },
  ]);

  // Handler to update paid amount and running balance
  const handlePaidAmountChange = (event, id) => {
    const updatedPayments = payments.map((payment) =>
      payment.id === id
        ? {
            ...payment,
            paidAmt: parseInt(event.target.value),
            runningBalance: payment.billAmt - parseInt(event.target.value),
          }
        : payment
    );
    setPayments(updatedPayments);
  };

  // Handler to toggle selection of a customer
  const toggleSelection = (id) => {
    const updatedPayments = payments.map((payment) =>
      payment.id === id
        ? { ...payment, isSelected: !payment.isSelected }
        : payment
    );
    setPayments(updatedPayments);
  };

  // Handler to export selected customers data to PDF
  const exportToPDF = () => {
    const selectedCustomers = payments.filter((payment) => payment.isSelected);
    const doc = new jsPDF();
    doc.text("Selected Customers Data", 10, 10);
    let yPos = 20;
    selectedCustomers.forEach((customer, index) => {
      doc.text(
        `${index + 1}. Customer Name: ${customer.customerName}`,
        10,
        yPos
      );
      yPos += 5;
      doc.text(`   DEN No.: ${customer.denNo}`, 10, yPos);
      yPos += 5;
      doc.text(`   Bill No.: ${customer.billNo}`, 10, yPos);
      yPos += 5;
      doc.text(`   Bill AMT: ${customer.billAmt}`, 10, yPos);
      yPos += 5;
      doc.text(`   Payment Date: ${customer.paymentDate}`, 10, yPos);
      yPos += 5;
      doc.text(`   Paid AMT: ${customer.paidAmt}`, 10, yPos);
      yPos += 5;
      doc.text(`   Running Balance: ${customer.runningBalance}`, 10, yPos);
      yPos += 10; // Increase vertical spacing between customers
    });
    doc.save("selected_customers_data.pdf");
  };

  return (
    <>
      <Breadcrumbs>
        <Link to={"/dashboard"} className="opacity-60">
          Dashboard
        </Link>
        <span>Payments</span>
      </Breadcrumbs>
      <div className="px-4 lg:px-6 py-3">
        <h1 className="font-bold text-2xl   text-[#6A241C]">Payments</h1>
        <h3 className="mb-2">
          Enter the amount to be paid and select customer to export their data
        </h3>
        <button
          onClick={exportToPDF}
          className="bg-[#6A241C] text-white px-4 py-2 rounded-md mb-4"
        >
          Export Selected Customers to PDF
        </button>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table headers */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Select
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Name
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DEN No.
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bill No.
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bill AMT
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Date
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Paid AMT
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Running Balance
                </th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {payments.map((payment, index) => (
                <tr key={index}>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={payment.isSelected}
                      onChange={() => toggleSelection(payment.id)}
                    />
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {payment.customerName}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {payment.denNo}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {payment.billNo}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {payment.billAmt}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {payment.paymentDate}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <input
                      type="number"
                      value={payment.paidAmt}
                      onChange={(e) => handlePaidAmountChange(e, payment.id)}
                      className="p-1 rounded-md border border-gray-300"
                    />
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {payment.runningBalance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Payments;
