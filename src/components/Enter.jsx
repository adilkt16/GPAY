import React from "react";
import FirstPage from "./FirstPage";
import Top from "./Enter/Top";
import MiddleScan from "./Enter/MiddleScan";
import Last from "./Enter/Last";
import Balance from "./Inner/Balance";
import Transaction from "./Inner/Transaction";

export default function Enter() {
  return (
    <>
      {/* <FirstPage /> */}
      <Top />
      <MiddleScan />
      <Last />
      {/* <Balance /> */}
      {/* <Transaction /> */}
    </>
  );
}
