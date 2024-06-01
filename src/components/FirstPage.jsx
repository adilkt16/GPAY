import React from "react";
import GoogleLogo from "../assets/gpay-logo.png";
import GoogleName from "../assets/google.png";

export default function FirstPage() {
  const divStyle = {
    height: "93vh",
    maxHeight: "93vh",
    overflowY: "hidden",
    backgroundColor: "#f4f4f4",
    width: "auto",
    margin: "0 auto",
    textAlign: "center",
    display: "block",
    padding: "20px 0",
    alignContent: "center",
  };
  const logoStyle = {
    width: "120px",
    margin: "0 auto",
    display: "block",
  };
  const nameStyle = {
    width: "120px",
    margin: "10px auto 0",
    display: "block",
  };
  return (
    <>
      <div style={divStyle}>
        <h1>
          <img style={logoStyle} src={GoogleLogo} alt="google-logo" />
        </h1>
        <h2>
          <img style={nameStyle} src={GoogleName} alt="google" />
        </h2>
      </div>
    </>
  );
}
