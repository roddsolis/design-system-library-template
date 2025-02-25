import React from "react";

const Table = ({ children }) => (
  <table
    style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}
  >
    {children}
  </table>
);

export default Table;
