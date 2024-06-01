import React, { useContext, useState } from "react";
import { BalanceContext } from "./BalanceContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Back from "../../assets/back.png";
import Dots from "../../assets/dots.png";

export default function Balance() {
  let navigate = useNavigate();
  const { setBalance } = useContext(BalanceContext);
  const [inputValue, setInputValue] = useState(""); // Local state for input value

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    setBalance(parseFloat(inputValue));
    navigate("/balance"); // Redirect to the balance page
  };

  return (
    <>
      <BalanceFull>
        <BalanceDiv>
          <BalanceImgs src={Back} onClick={() => navigate(-1)} alt="back" />
          <BalanceImgs
            src={Dots}
            onClick={() => navigate("/enter")}
            alt="3 dots"
          />
        </BalanceDiv>
        <Form onSubmit={handleSubmit}>
          <Input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
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
  background-color: #f4f5f7;
`;
const BalanceImgs = styled.img`
  width: 20px;
  display: block;
`;
const Form = styled.form`
  width: 100%;
  margin: 20px;
`;
const Input = styled.input`
  width: 100%;
  border: 1px solid #000;
  padding: 10px;
`;
const SubmitButton = styled.button`
  padding: 10px;
  background-color: red;
  margin-top: 10px;
`;
