import React, { useEffect, useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const Sidebar = () => {
  const { path, url } = useRouteMatch();
  const [inactive, setInactive] = useState(true);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    }
  });

  return (
    <div className={`side-bar ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo" onClick={() => setInactive(!inactive)}>
          <i class="fas fa-bars"></i>
        </div>
        {/* <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
          {inactive ? (
            <i class="bx bx-right-arrow-alt"></i>
          ) : (
            <i class="bx bx-left-arrow-alt"></i>
          )}
        </div> */}
      </div>
      {/* <div className="search-box">
        <button className="search-btn">
          <i class="bx bx-search-alt"></i>
        </button>
        <input type="text" placeholder="search..." />
      </div> */}

      {/* <div className="divider"></div> */}

      <div className="main-menu">
        <ul>
          <li
            className="menu-item-major"
            onClick={() => {
              if (inactive) {
                setInactive(false);
              }
            }}
          >
            <NavLink className="menu-item" to={`${url}`}>
              <div className="menu-icon">
                {/* <i class="bx bxs-dashboard"></i> */}
                <i class="fab fa-gripfire"></i>
              </div>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li
            className="menu-item-major"
            onClick={() => {
              if (inactive) {
                setInactive(false);
              }
            }}
          >
            <NavLink
              className="menu-item"
              onClick={() => setExpand(!expand)}
              to="#"
            >
              <div className="menu-icon">
                {/* <i class="bx bx-ghost"></i> */}
                <i class="fas fa-users"></i>
              </div>
              <span>Gramsevak</span>
            </NavLink>
            <ul className={`sub-menu ${expand ? "active" : ""}`}>
              <li>
                <NavLink to={`${url}/gsreg`}>Registeration</NavLink>
              </li>
              <li>
                <NavLink to={`${url}/gslist`}>List</NavLink>
              </li>
            </ul>
          </li>
          <li
            className="menu-item-major"
            onClick={() => {
              if (inactive) {
                setInactive(false);
              }
            }}
          >
            <NavLink className="menu-item" to={`${url}/complainreg`}>
              <div className="menu-icon">
                {/* <i class="bx bx-box"></i> */}
                <i class="fas fa-box-open"></i>
              </div>
              <span>Complaint</span>
            </NavLink>
          </li>
          <li
            className="menu-item-major"
            onClick={() => {
              if (inactive) {
                setInactive(false);
              }
            }}
          >
            <NavLink className="menu-item" to={`${url}/userdetail`}>
              <div className="menu-icon">
                <i class="bx bxs-user-detail"></i>
              </div>
              <span>User Details</span>
            </NavLink>
          </li>
          <li
            className="menu-item-major"
            onClick={() => {
              if (inactive) {
                setInactive(false);
              }
            }}
          >
            <NavLink className="menu-item" to={`${url}/reports`}>
              <div className="menu-icon">
                {/* <i class="bx bxs-report"></i> */}
                <i class="fas fa-flag-checkered"></i>
              </div>
              <span>Reports</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
