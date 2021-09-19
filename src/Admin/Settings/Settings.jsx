import React from "react";
import { useHistory } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  const history = useHistory();
  if (!sessionStorage.getItem("loggedin")) {
    history.push("/admin/login");
  }

  const handleLogout = () => {
    sessionStorage.removeItem("loggedin");
    sessionStorage.clear();
    history.push("/admin/login");
  };

  return (
    <div className="outermost-container">
      <div className="settings">
        <h3 className="title">settings</h3>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Settings;