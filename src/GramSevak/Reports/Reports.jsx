import React, { useState } from "react";
import { motion } from "framer-motion";

import Table from "../../components/Table/Table";
import data, { titles } from "./ReportsData";

const Reports = () => {
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
      <Table titles={titles} data={data} header={"Reports"} />
    </motion.div>
  );
};

export default Reports;