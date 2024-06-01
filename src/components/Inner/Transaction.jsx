import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Back from "../../assets/back.png";
import Dots from "../../assets/dots.png";

export default function Transaction() {
  let navigate = useNavigate();
  return (
    <>
      <TransFull>
        <BalanceDiv>
          <BalanceImgs src={Back} onClick={() => navigate(-1)} alt="back" />
          <BalanceImgs src={Dots} alt="3 dots" />
        </BalanceDiv>
        <Server>
          <ServerP>Internal Server Error</ServerP>
          <Report
            href="https://support.google.com/googlepay/answer/10191989?hl=en"
            target="blank"
          >
            Report
          </Report>
        </Server>
      </TransFull>
    </>
  );
}

const TransFull = styled.div`
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

const Server = styled.div`
  height: 90vh;
  // background-color: gray;
  display: grid;
  place-content: center;
  background-color: #f4f5f7;
`;
const ServerP = styled.p`
  color: #2f2f2f;
`;
const Report = styled.a`
  text-decoration: none;
  color: darkblue;
  font-size: 12px;
  border: 1px solid #333;
  padding: 8px 24px;
  display: inline-block;
  border-radius: 20px;
  margin-top: 10px;
  text-align: center;
`;
