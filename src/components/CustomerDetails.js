import React, { useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CustomerDetails = () => {
  const [filterDen, setFilterDen] = useState(""); // State for DEN number filter
  const [editableFields, setEditableFields] = useState({}); // State for editable fields

  // Sample data for bills
  const sampleBills = [
    {
      customerName: "Customer A",
      gstinPan: "ABC123456789",
      billNo: "001",
      billDate: "2024-02-28",
      billReceivingDate: "2024-02-28",
      billEntryDate: "2024-02-28",
      denNo: "DEN1",
      totalBillAmt: 1000,
    },
    {
      customerName: "Customer B",
      gstinPan: "DEF987654321",
      billNo: "002",
      billDate: "2024-02-27",
      billReceivingDate: "2024-02-27",
      billEntryDate: "2024-02-27",
      denNo: "DEN2",
      totalBillAmt: 1500,
    },
  ];

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
              {sampleBills
                .filter((bill) => !filterDen || bill.denNo.includes(filterDen)) // Apply filter based on DEN number
                .map((bill, index) => (
                  <tr key={index}>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {bill.customerName}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {bill.gstinPan}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {bill.billNo}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {bill.billDate}
                    </td>
                    {/* Editable fields */}
                    <td className="px-3 py-2 whitespace-nowrap">
                      <input
                        type="date"
                        value={
                          editableFields.billReceivingDate ||
                          bill.billReceivingDate
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
                          editableFields.billEntryDate || bill.billEntryDate
                        }
                        onChange={(e) =>
                          handleEditableFieldChange(e, "billEntryDate")
                        }
                        className="p-2 rounded-md border border-gray-300"
                      />
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {bill.denNo}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap flex items-center">
                      <p className="px-1">₹</p>
                      <input
                        type="text"
                        value={editableFields.totalBillAmt || bill.totalBillAmt}
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
