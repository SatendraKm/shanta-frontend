import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import SignUp from "./Signup";
import AddCustomer from "./AddCustomer";
import CustomerDetails from "./CustomerDetails";
import BillEntry from "./BillEntry";
import Form4 from "./Form4";
import BankDetails from "./BankDetails";
// import Form4 from "./Form4";
// import BankDetails from "./BankDetails";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/*" element={<ProtectedRoutes />} />
      </Routes>
    </Router>
  );
};

const ProtectedRoutes = () => {
  return (
    <>
      <div className="flex flex-row bg-white  h-screen overflow-hidden">
        <NavigationBar />
        <div className="flex-auto overflow-auto scrollbar-hide">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AddCustomer" element={<AddCustomer />} />
            <Route path="/CustomerDetails" element={<CustomerDetails />} />
            <Route path="/BillEntry" element={<BillEntry />} />
            <Route path="/form4" element={<Form4 />} />
            <Route path="/BankDetails" element={<BankDetails />} />
            {/* <Route path="/form4" element={<Form4 />} />
            <Route path="/BankDetails" element={<BankDetails />} /> */}
            {/* Define other dashboard routes here */}
          </Routes>
        </div>
      </div>
    </>
  );
};
export default Index;
