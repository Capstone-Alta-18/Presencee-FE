import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingMain from "../pages/landingPage/LandingMain";
import LoginAdmin from "../pages/loginAdmin/LoginAdmin";
import LoginDosen from "../pages/loginDosen/LoginDosen";

const RouterManagement = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/login-dosen" element={<LoginDosen />} />
          <Route path="/dashboard-admin" element={<LoginDosen />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default RouterManagement;
