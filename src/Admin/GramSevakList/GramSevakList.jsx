import React, { useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import Table from "../../components/Table/Table";
import { titles, dbdata, DATA } from "./GramSevakListData";

const GramSevakList = () => {
  const history = useHistory();
  if (!sessionStorage.getItem("loggedin")) {
    history.push("/admin/login");
  }

  return (
    <motion.div
      className="outermost-container"
      initial={{ y: 500 }}
      animate={{
        y: 0,
        transition: { duration: 0.5, type: "spring" },
      }}
      exit={{
        y: -500,
        transition: { duration: 0.3, type: "spring", ease: "ease-in-out" },
      }}
    >
      <Table titles={titles} data={dbdata} header={"Gram Sevak List"} />
    </motion.div>
  );
};

export default GramSevakList;