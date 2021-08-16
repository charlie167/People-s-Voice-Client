import React from "react";
import { motion } from "framer-motion";

const Settings = () => {
  return (
    <>
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
        <h1 className="inner-container">Admin settings</h1>
      </motion.div>
    </>
  );
};

export default Settings;
