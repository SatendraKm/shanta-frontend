import React, { useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { utils, writeFile } from "xlsx"; // Corrected import
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Payments = () => {
  // Sample data for payments
  const [payments, setPayments] = useState([
    {
      id: 1,
      name: "Customer A",
      ifsc: "ABCD0123456",
      accountNo: "1234567890",
      bankName: "ABC Bank",
      totalBillAmt: 2500, // Updated to be the sum of all bill amounts
      bills: [
        {
          billNo: "1. ",
          billAmt: 1000,
          paymentDate: "2024-02-28",
          paidAmt: 0,
        },
        {
          billNo: "2. ",
          billAmt: 1500,
          paymentDate: "2024-02-27",
          paidAmt: 0,
        },
      ],
    },
    {
      id: 2,
      name: "Customer B",
      ifsc: "XYZ0987654",
      accountNo: "9876543210",
      bankName: "XYZ Bank",
      totalBillAmt: 1800, // Updated to be the sum of all bill amounts
      bills: [
        {
          billNo: "3. ",
          billAmt: 800,
          paymentDate: "2024-03-01",
          paidAmt: 0,
        },
        {
          billNo: "4. ",
          billAmt: 1000,
          paymentDate: "2024-02-29",
          paidAmt: 0,
        },
      ],
    },
  ]);

  // State to keep track of selected bills
  const [selectedBills, setSelectedBills] = useState({});
  // State to track the expanded customer
  const [expandedCustomer, setExpandedCustomer] = useState(null);

  // Handler to update paid amount and running balance
  const handlePaidAmountChange = (event, customerId, billIndex) => {
    const enteredValue = parseInt(event.target.value);
    const updatedPayments = payments.map((payment) => {
      if (payment.id === customerId) {
        const updatedBills = payment.bills.map((bill, index) => {
          if (index === billIndex) {
            const paidAmt =
              isNaN(enteredValue) ||
              enteredValue < 0 ||
              enteredValue > bill.billAmt
                ? 0
                : enteredValue;
            const runningBalance = bill.billAmt - paidAmt;
            return {
              ...bill,
              paidAmt,
              runningBalance,
            };
          }
          return bill;
        });
        const totalBillAmt = updatedBills.reduce(
          (sum, bill) => sum + bill.billAmt,
          0
        );
        return {
          ...payment,
          bills: updatedBills,
          totalBillAmt,
        };
      }
      return payment;
    });
    setPayments(updatedPayments);
  };

  // Handler to toggle the bill details section
  const toggleBillDetails = (customerId) => {
    setExpandedCustomer((prevExpandedCustomer) =>
      prevExpandedCustomer === customerId ? null : customerId
    );
  };

  // Handler to select/deselect a bill
  const handleAccordionSelection = (customerId) => {
    if (selectedBills[customerId]?.length > 0) {
      // Deselect all bills if any bill is selected
      setSelectedBills((prevSelectedBills) => ({
        ...prevSelectedBills,
        [customerId]: [],
      }));
    } else {
      // Select all bills if no bill is selected
      const allBillsIndexes = [
        ...Array(payments[customerId - 1].bills.length).keys(),
      ];
      setSelectedBills((prevSelectedBills) => ({
        ...prevSelectedBills,
        [customerId]: allBillsIndexes,
      }));
    }
  };

  // Handler to export selected bills data to Excel
  const exportToExcel = () => {
    // Filter payments to include only selected customers
    const selectedCustomers = payments.filter((payment) => {
      return selectedBills[payment.id] && selectedBills[payment.id].length > 0;
    });

    // If no selected customers, return without exporting
    if (selectedCustomers.length === 0) {
      console.log("No customer selected to export.");
      return;
    }

    // Generate data for selected customers
    const selectedCustomersData = selectedCustomers.map((customer) => {
      const selectedCustomerBills = customer.bills.filter((bill, index) =>
        selectedBills[customer.id].includes(index)
      );
      const totalPaidAmount = selectedCustomerBills.reduce(
        (sum, bill) => sum + bill.paidAmt,
        0
      );

      return {
        "S. No.": customer.id,
        Name: customer.name,
        IFSC: customer.ifsc,
        "A/C No.": customer.accountNo,
        "Bank Name": customer.bankName,
        "Paid Amount": totalPaidAmount,
      };
    });

    // Create Excel workbook and sheet
    const ws = utils.json_to_sheet(selectedCustomersData);
    const wb = utils.book_new();

    utils.book_append_sheet(wb, ws, "Customer Data");
    writeFile(wb, "customer_data.xlsx");
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
          Select bills and enter the amount to be paid, then export the data
        </h3>
        <button
          onClick={exportToExcel}
          className="bg-[#6A241C] font-mono text-white px-4 py-2 rounded-md mb-4"
        >
          Export Selected Bills
        </button>
        <div className="overflow-x-auto">
          {payments.map((payment) => (
            <div key={payment.id} className="mb-4">
              <div
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg cursor-pointer font-mono"
                onClick={() => toggleBillDetails(payment.id)}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={selectedBills[payment.id]?.length > 0}
                    onChange={() => handleAccordionSelection(payment.id)}
                    className="mr-2"
                  />
                  <span className="font-bold">{payment.id}.</span>{" "}
                  {payment.name} | IFSC: {payment.ifsc} | A/C No.:{" "}
                  {payment.accountNo} | Bank Name: {payment.bankName} | Total
                  Amount: ${payment.totalBillAmt}
                </div>
                <div>
                  {expandedCustomer === payment.id ? (
                    <FaChevronUp className="inline ml-2" />
                  ) : (
                    <FaChevronDown className="inline ml-2" />
                  )}
                </div>
              </div>

              {expandedCustomer === payment.id && (
                <div className="border border-gray-200 p-4 rounded-lg mt-2">
                  <h4 className="font-bold text-lg mb-2">Bill Details</h4>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Bill No.
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Bill Amount
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Payment Date
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Paid Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {payment.bills.map((bill, index) => (
                        <tr key={index}>
                          <td className="px-3 py-2 whitespace-nowrap">
                            {bill.billNo}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap">
                            ₹{bill.billAmt}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap">
                            {bill.paymentDate}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap">
                            {"₹ "}
                            <input
                              type="number"
                              value={bill.paidAmt}
                              onChange={(e) =>
                                handlePaidAmountChange(e, payment.id, index)
                              }
                              className="p-1 rounded-md border border-gray-300"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Payments;
