import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./admin/Navbar";
import AdminDashboard from "./admin/AdminDashboard";
import PriorityComplaints from "./admin/PriorityComplaints";
import Sidebar from "./admin/Sidebar";
import GSRegLog from "./admin/GSRegLog";
import GSList from "./admin/GSList";
import ComplaintReg from "./admin/ComplaintReg";
import UserDetails from "./admin/UserDetails";
import Settings from "./admin/Settings";
import Reports from "./admin/Reports";

const Admin = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Route path={`${path}`}>
          <Sidebar />
        </Route>

        <Route path={`${path}`}>
          <Navbar />
        </Route>

        <Route exact path={`${path}`}>
          <AdminDashboard />
        </Route>

        <Route path={`${path}/priority`}>
          <PriorityComplaints />
        </Route>

        <Route path={`${path}/gsreg`}>
          <GSRegLog />
        </Route>

        <Route path={`${path}/gslist`}>
          <GSList />
        </Route>

        <Route path={`${path}/complainreg`}>
          <ComplaintReg />
        </Route>

        <Route path={`${path}/userdetail`}>
          <UserDetails />
        </Route>

        <Route path={`${path}/reports`}>
          <Reports />
        </Route>

        <Route path={`${path}/settings`}>
          <Settings />
        </Route>
      </AnimatePresence>
    </>
  );
};

export default Admin;
