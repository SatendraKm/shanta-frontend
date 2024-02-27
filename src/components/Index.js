import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import SignUp from "./Signup";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
// import Form4 from "./Form4";
// import Form5 from "./Form5";

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
      <div className="flex flex-row bg-white ">
        <NavigationBar />
        <div className="w-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form1" element={<Form1 />} />
            <Route path="/form2" element={<Form2 />} />
            <Route path="/form3" element={<Form3 />} />
            <Route path="/form4" element={<Form4 />} />
            <Route path="/form5" element={<Form5 />} />
            {/* <Route path="/form4" element={<Form4 />} />
            <Route path="/form5" element={<Form5 />} /> */}
            {/* Define other dashboard routes here */}
          </Routes>
        </div>
      </div>
    </>
  );
};
export default Index;
