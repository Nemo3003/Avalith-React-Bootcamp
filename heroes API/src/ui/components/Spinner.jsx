import React from "react";
import Loading from "../../../assets/spinner.gif";

export const Spinner = () => {
  return (
    <img
      src={Loading}
      alt="Loading"
      style={{ width: "80px", margin: "auto", display: "block" }}
    />
  );
};

