import React from "react";
import PreLoader from '@mui/material/CircularProgress';
export default function Loader() {
  return (
    <div className="loader" style={{ marginLeft: "auto", marginRight: "auto" }}>
      <img src={PreLoader} alt="apple loader" className="logo" />
    </div>
  );
}
