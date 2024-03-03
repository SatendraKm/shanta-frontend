import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CustomerDetails = () => {
  const [filterDen, setFilterDen] = useState(""); // State for DEN number filter
  const [editableFields, setEditableFields] = useState({}); // State for editable fields

  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const fetchCustomerData = async () => {
    try {
      const response = await fetch(
        "http://44.212.65.125:3000/api/customers_with_bills"
      );
      const data = await response.json();
      setCustomerData(data.customersWithBills);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  // Handler for filtering based on DEN number
  const handleFilterDen = (event) => {
    setFilterDen(event.target.value);
  };

  // Handler for updating editable fields
  const handleEditableFieldChange = (event, fieldName) => {
    setEditableFields({
      ...editableFields,
      [fieldName]: event.target.value,
    });
  };

  return (
    <>
      <Breadcrumbs>
        <Link to={"/dashboard"} className="opacity-60">
          Dashboard
        </Link>
        <span>Bill Details</span>
      </Breadcrumbs>
      <div className="px-4 lg:px-4 py-2">
        <h2 className="font-bold text-2xl text-[#6A241C]">Bill Details</h2>

        {/* Filter by DEN number */}
        <div className="my-2">
          <label className="text-gray-600 mr-2">Filter by DEN Number:</label>
          <input
            type="text"
            value={filterDen}
            onChange={handleFilterDen}
            className="m-1 p-1 rounded-md border border-gray-300"
            placeholder="Enter DEN Number"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="max-w-full divide-y divide-gray-200">
            {/* Table headers */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Name
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  GSTIN / PAN No.
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bill No.
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bill Date
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bill Receiving Date
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bill Entry Date
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DEN No.
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Bill AMT
                </th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {customerData
                .filter((customer) =>
                  customer.den_no
                    .toLowerCase()
                    .includes(filterDen.toLowerCase())
                )
                .map((customer, index) => (
                  <tr key={index}>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {customer.name}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {customer.gstinPan}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {customer.bill_no}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {customer.bill_date
                        ? customer.bill_date.substring(0, 10)
                        : ""}
                    </td>
                    {/* Editable fields */}
                    <td className="px-3 py-2 whitespace-nowrap">
                      <input
                        type="date"
                        value={
                          customer.bill_receiving_date
                            ? customer.bill_receiving_date.substring(0, 10)
                            : ""
                        }
                        onChange={(e) =>
                          handleEditableFieldChange(e, "billReceivingDate")
                        }
                        className="p-2 rounded-md border border-gray-300"
                      />
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <input
                        type="date"
                        value={
                          customer.bill_receiving_date
                            ? customer.bill_receiving_date.substring(0, 10)
                            : ""
                        }
                        onChange={(e) =>
                          handleEditableFieldChange(e, "billEntryDate")
                        }
                        className="p-2 rounded-md border border-gray-300"
                      />
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {customer.den_no}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap flex items-center">
                      <span className="px-1">₹</span>
                      <input
                        type="text"
                        value={
                          editableFields.total_bill_amt ||
                          customer.total_bill_amt
                        }
                        onChange={(e) =>
                          handleEditableFieldChange(e, "totalBillAmt")
                        }
                        className="p-2 rounded-md border border-gray-300"
                      />
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

export default CustomerDetails;
