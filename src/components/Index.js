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
import Payments from "./Payments";
import BankDetails from "./BankDetails";
import ForgotPassword from "./ForgotPassword";
import { AuthProvider } from "../utils/AuthContext"; // Import the AuthProvider
import PrivateRoute from "./PrivateRoute";

const Index = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const Dashboard = () => {
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
            <Route path="/Payments" element={<Payments />} />
            <Route path="/BankDetails" element={<BankDetails />} />
            {/* <Route path="/Payments" element={<Payments />} />
            <Route path="/BankDetails" element={<BankDetails />} /> */}
            {/* Define other dashboard routes here */}
          </Routes>
        </div>
      </div>
    </>
  );
};
export default Index;
