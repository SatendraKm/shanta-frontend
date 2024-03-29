import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
const BankDetails = () => {
  // Sample data for banks
  const [banks, setBanks] = useState([
    {
      id: 1,
      bankName: "Bank A",
      accountName: "Account A",
      accountNo: "1234567890",
      ifsc: "ABCD123456",
      chequeBookNumber: "CB001",
      chequeFrom: "1001",
      chequeTo: "1050",
    },
    {
      id: 2,
      bankName: "Bank B",
      accountName: "Account B",
      accountNo: "0987654321",
      ifsc: "EFGH987654",
      chequeBookNumber: "CB002",
      chequeFrom: "2001",
      chequeTo: "2050",
    },
  ]);

  // State for dialog visibility and mode (add or edit)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState("add");

  // State for form fields
  const [formData, setFormData] = useState({
    bankName: "",
    accountName: "",
    accountNo: "",
    ifsc: "",
    chequeBookNumber: "",
    chequeFrom: "",
    chequeTo: "",
  });

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const resetForm = () => {
    setFormData({
      bankName: "",
      accountName: "",
      accountNo: "",
      ifsc: "",
      chequeBookNumber: "",
      chequeFrom: "",
      chequeTo: "",
    });
  };

  // Function to handle adding or editing bank details
  const handleSave = () => {
    if (dialogMode === "add") {
      const newBank = { ...formData, id: Date.now() };
      setBanks([...banks, newBank]);
    } else if (dialogMode === "edit") {
      const updatedBanks = banks.map((bank) =>
        bank.id === formData.id ? { ...formData } : bank
      );
      setBanks(updatedBanks);
      resetForm();
      setIsDialogOpen(false);
    }

    setFormData({
      bankName: "",
      accountName: "",
      accountNo: "",
      ifsc: "",
      chequeBookNumber: "",
      chequeFrom: "",
      chequeTo: "",
    });
    setIsDialogOpen(false);
  };
  const handleCancel = () => {
    // Reset form after canceling
    resetForm();
    setIsDialogOpen(false);
  };

  // Function to handle editing bank details
  const handleEdit = (bank) => {
    setDialogMode("edit");
    setFormData(bank);
    setIsDialogOpen(true);
  };

  // Function to handle deleting bank details
  const handleDelete = (id) => {
    const updatedBanks = banks.filter((bank) => bank.id !== id);
    setBanks(updatedBanks);
  };

  return (
    <>
      <Breadcrumbs>
        <Link to={"/dashboard"} className="opacity-60">
          Dashboard
        </Link>
        <span>Bank Details</span>
      </Breadcrumbs>
      <div className="container ml-2 mx-auto px-4 py-2">
        <div className="">
          <h1 className="font-bold text-2xl text-[#6A241C]">Bank Details</h1>
          <h3 className="">Manage all your bank accounts here</h3>
          <button
            onClick={() => {
              setIsDialogOpen(true);
              setDialogMode("add");
            }}
            className="bg-[#6A241C] mt-2 font-mono text-white px-4 py-2 rounded-md mb-4"
          >
            Add New Bank Account
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bank Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  A/C Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  A/C No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  IFSC
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cheque Book No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cheque No. From
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cheque No. To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {banks.map((bank) => (
                <tr key={bank.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {bank.bankName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {bank.accountName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {bank.accountNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{bank.ifsc}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {bank.chequeBookNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {bank.chequeFrom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {bank.chequeTo}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <button
                      onClick={() => handleEdit(bank)}
                      className="text-white font-mono hover:bg-[#6A241C] bg-[#862e24] rounded-md p-1 m-0.5"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(bank.id)}
                      className="text-white font-mono hover:bg-red-600 bg-red-500 rounded-md p-1 m-0.5"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isDialogOpen && (
          <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-100 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-8 rounded-md w-96 shadow-lg">
              <h2 className="text-xl font-semibold mb-3">
                {dialogMode === "add"
                  ? "Add New Bank Account"
                  : "Edit Bank Account"}
              </h2>
              <input
                type="text"
                name="bankName"
                placeholder="Bank Name"
                value={formData.bankName}
                onChange={handleInputChange}
                className="input p-1.5 my-1 rounded-md border border-1 w-full border-gray-300"
              />
              <input
                type="text"
                name="accountName"
                placeholder="A/C Name"
                value={formData.accountName}
                onChange={handleInputChange}
                className="input p-1.5 my-1 rounded-md border border-1  w-full border-gray-300"
              />
              <input
                type="text"
                name="accountNo"
                placeholder="A/C No."
                value={formData.accountNo}
                onChange={handleInputChange}
                className="input p-1.5 my-1 rounded-md border border-1  w-full border-gray-300"
              />
              <input
                type="text"
                name="ifsc"
                placeholder="IFSC"
                value={formData.ifsc}
                onChange={handleInputChange}
                className="input p-1.5 my-1 rounded-md border border-1  w-full border-gray-300"
              />
              <input
                type="text"
                name="chequeBookNumber"
                placeholder="Cheque Book No."
                value={formData.chequeBookNumber}
                onChange={handleInputChange}
                className="input p-1.5 my-1 rounded-md border border-1  w-full border-gray-300"
              />
              <input
                type="text"
                name="chequeFrom"
                placeholder="Cheque No. From"
                value={formData.chequeFrom}
                onChange={handleInputChange}
                className="input p-1.5 my-1 rounded-md border border-1  w-full border-gray-300"
              />
              <input
                type="text"
                name="chequeTo"
                placeholder="Cheque No. To"
                value={formData.chequeTo}
                onChange={handleInputChange}
                className="input p-1.5 my-1 rounded-md border border-1  w-full border-gray-300"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  className="btn bg-[#6A241C] rounded-md p-1 px-3  text-white m-1"
                >
                  {dialogMode === "add" ? "Add" : "Save"}
                </button>
                <button
                  onClick={handleCancel}
                  className="btn bg-gray-300 text-gray-800 rounded-md p-1 px-2 m-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BankDetails;
