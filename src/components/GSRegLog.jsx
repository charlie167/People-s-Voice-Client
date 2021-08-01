import React, { useState } from "react";
import Form from "./Form";

const GSRegLog = () => {

  const url ={
    url_reg: "/politician_image_building/gs-register.php" ,
    url_log: "/politician_image_building/gs-login.php",
    url_page: "/gramsevak",
    title: "Gram Sevak"
  }

  //rendering jsx form
  return <Form 
          props = {url}
          />;
};

export default GSRegLog;
