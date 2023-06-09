import { userStorageKey } from "../../helpers/storage";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
  };
};

export function Navbar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem(userStorageKey);
    navigate("/auth/login");
  };
  return (
    <>
      <nav
        className="primary-nav"
        style={{
          textAlign: "center",
          margin: "30px",
          position: "relative",
          zIndex: "1",
          background: "white",
          padding: "7px",
        }}
      >
        <NavLink to="/" style={navLinkStyles}>
          Home
        </NavLink>
        <span style={{ margin: "5px" }} />
        <NavLink to="/dashboard/home" style={navLinkStyles}>
          Dashboard
        </NavLink>
        <span style={{ margin: "5px" }} />
        <NavLink to="/auth/login" style={navLinkStyles}>
          Login
        </NavLink>
        <span style={{ margin: "5px" }} />
        <NavLink to="/auth/create-account" style={navLinkStyles}>
          SignUp
        </NavLink>
        <button onClick={logoutHandler} style={{ marginLeft: "20px" }}>
          Logout
        </button>
      </nav>
    </>
  );
}

export default Navbar;
