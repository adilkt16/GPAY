import React from "react";
import Search from "../../assets/search.png";
import MyProfile from "../../assets/adil.jpg";
import EnterMain from "../../assets/entermain.jpeg";
import styled from "styled-components";

export default function Top() {
  return (
    <>
      <MainDiv>
        <Both>
          <SearchImg src={Search} alt="Search" />
          <Form action="get">
            <Input type="text" placeholder="Pay friends or merchants" />
          </Form>
        </Both>
        <My className="My-profile">
          <ProImg src={MyProfile} alt="My-profile" />
        </My>
      </MainDiv>
      <MainImgCont>
        <MainImg src={EnterMain} alt="Main" />
      </MainImgCont>
      <ForPostionFirst>
        <BothTopPos>
          <TopP>
            Get up to ₹500 cashback <br /> with RuPay on UPI
          </TopP>
          <Invite href="#">Add card now</Invite>
        </BothTopPos>
      </ForPostionFirst>
    </>
  );
}

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  padding: 10px 20px;
  overflow-x: hidden;
`;
const Both = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  width: 75%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 4px;
`;
const SearchImg = styled.img`
  width: 15px;
  display: block;
  height: 15px;
`;
const Form = styled.form`
  margin-left: 10px;
`;
const Input = styled.input`
  opacity: 0.8;
`;
const My = styled.div`
  width: 10%;
`;
const ProImg = styled.img`
  width: 30px;
  display: block;
  height: 30px;
  border-radius: 50%;
  margin-left: 10px;
`;

const MainImgCont = styled.div`
  width: 413px;
  display: block;
`;
const MainImg = styled.img`
  width: 100%;
  height: 150px;
  display: block;
`;

const ForPostionFirst = styled.div`
  position: relative;
`;
const BothTopPos = styled.div`
  position: absolute;
  bottom: 50px;
  font-weight: 300;
  margin: 0 20px;
`;
const TopP = styled.p`
  font-weight: 400;
  line-height: 20px;
`;

const Invite = styled.a`
  text-decoration: none;
  color: darkblue;
  font-size: 12px;
  border: 1px solid #333;
  padding: 8px 24px;
  display: inline-block;
  border-radius: 20px;
  margin-top: 10px;
`;
