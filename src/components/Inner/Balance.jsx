import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { BalanceContext } from "./BalanceContext";

import Back from "../../assets/back.png";
import Dots from "../../assets/dots.png";
// import UPI from "../../assets/UPI.svg";
import SvgComponent from "../../assets/UPI";
import SBI from "../../assets/SBI-Logo.png";

export default function Balance() {
  let navigate = useNavigate();
  const { balance, setBalance } = useContext(BalanceContext);

  useEffect(() => {
    const storedBalance = localStorage.getItem("balance");
    console.log("Stored balance:", storedBalance);
    if (storedBalance) {
      setBalance(parseFloat(storedBalance));
    }
  }, [setBalance]);

  // Store balance in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("balance", balance);
    console.log("Balance stored in localStorage:", balance);
  }, [balance]);

  return (
    <>
      <BalanceFull>
        <BalanceDiv>
          <BalanceImgs src={Back} onClick={() => navigate(-1)} alt="back" />
          <BalanceImgs
            src={Dots}
            onClick={() => navigate("/editor")}
            alt="3 dots"
          />
        </BalanceDiv>
        <H3>Bank balance</H3>
        <BalanceSum>
          <RupeeSymbol>₹</RupeeSymbol>
          {balance}
        </BalanceSum>
        <Savings>Savings account</Savings>
        <StateBank>State Bank of India 1955</StateBank>
        <BottomDiv>
          <Powered>Powered by</Powered>
          <BothSvgs>
            {/* <img src={SvgComponent()} alt="upi" /> */}
            <SvgDiv>{SvgComponent()}</SvgDiv>
            <SBIIMG src={SBI} alt="sbi" />
          </BothSvgs>
        </BottomDiv>
      </BalanceFull>
    </>
  );
}

const BalanceFull = styled.div`
  height: 100vh;
`;
const BalanceDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  justify-content: space-between;
`;
const BalanceImgs = styled.img`
  width: 20px;
  display: block;
`;
const BalanceSum = styled.p`
  margin: 5px 20px 0;
  font-weight: 500;
  font-size: 34px;
  color: #2f2f2f;
`;
const RupeeSymbol = styled.span`
  font-weight: 500;
  font-size: 28px;
  color: #2f2f2f;
`;
const H3 = styled.h3`
  margin: 10px 20px 20px;
  font-weight: 400;
  font-size: 24px;
`;
const Savings = styled.p`
  margin: 50px 20px 0;
  font-weight: 400;
  font-size: 16px;
`;
const StateBank = styled.p`
  margin: 5px 20px 0;
  font-weight: 300;
  font-size: 14px;
  color: #2f2f2f;
`;

const BottomDiv = styled.div`
  position: relative;
  top: 60%;
`;
const Powered = styled.p`
  font-size: 11px;
  text-align: center;
  color: #2f2f2f;
  opacity: 0.8;
`;
const BothSvgs = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.5;
  justify-content: center;
`;
const SvgDiv = styled.div`
  width: 30px;
  height: 30px;
  display: block;
  margin-right: 5px;
`;
const SBIIMG = styled.img`
  width: 30px;
  height: 20px;
  display: block;
`;
