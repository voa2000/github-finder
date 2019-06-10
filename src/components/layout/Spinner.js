import React from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <fragment>
      <img
        src={spinner}
        alt='Loading.....'
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </fragment>
  );
};

export default Spinner;
