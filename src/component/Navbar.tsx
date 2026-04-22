import React from "react";
import {logout}  from "../utils/auth";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
<div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3>Lifecycle Dashboard</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;