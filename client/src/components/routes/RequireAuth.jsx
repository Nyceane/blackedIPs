import { userStorageKey } from "@/helper/storage";

import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const myAuth = localStorage.getItem(userStorageKey);
  const location = useLocation();


  
if ( typeof(myAuth) === "undefined" || !myAuth || myAuth === "undefined") {
    return <Navigate to="/auth/login" state={{ path: location.pathname }} />;
  }
  return children;
};


export const RequireNoAuth = ({ children }) => {
  const myAuth = localStorage.getItem(userStorageKey);
  if ( typeof(myAuth) !== "undefined" && myAuth !== null && myAuth !== "undefined") {
    return <Navigate to="/dashboard/home"  />;
  }
  return children;
};
