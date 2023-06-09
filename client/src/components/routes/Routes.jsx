import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Auth, Home ,Privacy,TermsCondition,CCPA,Optout, Disabled} from "@/layouts";

// import { Login } from "./pages/Login";


import { RequireAuth ,RequireNoAuth} from "../routes/RequireAuth";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-condition" element={<TermsCondition />} />
        <Route path="/ccpa" element={<CCPA />} />
        <Route path="/optout" element={<Optout />} />
        <Route path="/disabled" element={<Disabled />} />
       
        <Route
          path="/dashboard/*"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/auth/*" element={<RequireNoAuth><Auth /></RequireNoAuth>} />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  );
}

export default AppRoutes;
