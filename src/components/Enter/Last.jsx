import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Balance from "../Inner/Balance";

//Images
import Reward from "../../assets/rewards.png";
import Offer from "../../assets/offers.png";
import Referral from "../../assets/refferals.png";
import Tez from "../../assets/tezshots.png";
import Speedo from "../../assets/speedometer.png";
import Time from "../../assets/time-left.png";
import BankIcon from "../../assets/main-bank.png";
import Next from "../../assets/next.png";
import PaymentPhoto from "../../assets/paymentphoto.png";
import Transaction from "../Inner/Transaction";

export default function Last() {
  return (
    <>
      {/* <Router> */}
      <div>
        <Offers>
          <H3>Offers & rewards</H3>
          <AllPeople>
            <EachPeople>
              <PeopleImgCont>
                <PeopleImg src={Reward} alt="Each person" />
              </PeopleImgCont>
              <PeopleP>Rewards</PeopleP>
            </EachPeople>
            <EachPeople>
              <PeopleImgCont>
                <PeopleImg src={Offer} alt="Each person" />
              </PeopleImgCont>
              <PeopleP>Offers</PeopleP>
            </EachPeople>
            <EachPeople>
              <PeopleImgCont>
                <PeopleImg src={Referral} alt="Each person" />
              </PeopleImgCont>
              <PeopleP>Referrals</PeopleP>
            </EachPeople>
            <EachPeople>
              <PeopleImgCont>
                <PeopleImg src={Tez} alt="Tez" />
              </PeopleImgCont>
              <PeopleP>Tez Shots</PeopleP>
            </EachPeople>
          </AllPeople>
        </Offers>
        {/* Main part from here */}
        <MainPart>
          <MainEach>
            <MainIconCont>
              <MainIconImg src={Speedo} alt="speedo" />
            </MainIconCont>
            <Wrap>
              <MainP>Check your CIBIL score for free</MainP>
              <ArrowIconCont>
                <ArrowIconImg src={Next} alt="next" />
              </ArrowIconCont>
            </Wrap>
          </MainEach>
          <Link
            to="/transaction"
            style={{ textDecoration: "none", color: "black" }}
            element={<Transaction />}
          >
            <MainEach>
              <MainIconCont>
                <MainIconImg src={Time} alt="time" />
              </MainIconCont>
              <Wrap>
                <MainP>See transaction history</MainP>
                <ArrowIconCont>
                  <ArrowIconImg src={Next} alt="next" />
                </ArrowIconCont>
              </Wrap>
            </MainEach>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/balance"
            element={<Balance />}
          >
            <MainEach>
              <MainIconCont>
                <MainIconImg src={BankIcon} alt="Bank" />
              </MainIconCont>
              <Wrap>
                <MainP>Check bank balance</MainP>
                <ArrowIconCont>
                  <ArrowIconImg src={Next} alt="next" />
                </ArrowIconCont>
              </Wrap>
            </MainEach>
          </Link>
        </MainPart>
        {/* Refer part from here */}
        <ReferPart>
          <ReferPartH5>Invite friends to get ₹201</ReferPartH5>
          <ReferPartMainP>
            Invite friends to Google Pay and get ₹201 <br />
            when your friend sends their first payment. <br /> They get ₹21!
          </ReferPartMainP>
          <ReferPartLessP>
            Copy your code <ReferPartLessPSpan>o49f186</ReferPartLessPSpan>
          </ReferPartLessP>
          <Invite href="#">Invite</Invite>
        </ReferPart>
        <ForPosition>
          <PayPhotoDiv>
            <PayPhoto src={PaymentPhoto} alt="image" />
          </PayPhotoDiv>
        </ForPosition>
        <div>
          <LastP>
            Showing business based on your location - <br /> Learn more
          </LastP>
        </div>
      </div>
      {/* </Router> */}
    </>
  );
}

const H3 = styled.h3`
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 20px;
`;
const Offers = styled.div`
  margin: 30px 20px;
`;
const AllPeople = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const EachPeople = styled.div`
  width: 25%;
  margin-bottom: 10px;
`;
const PeopleImgCont = styled.div`
  width: 60px;
  display: block;
  margin: 0 auto;
`;
const PeopleImg = styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
  margin: 0 auto 6px;
`;
const PeopleP = styled.p`
  font-size: 12px;
  text-align: center;
`;

const MainPart = styled.div`
  margin: 20px 30px;
`;
const MainEach = styled.div`
  display: flex;
  // justify-content: space-between;
  margin-bottom: 20px;
`;
const MainIconCont = styled.div`
  // width: 20px;
  width: 6%;
  display: block;
`;
const MainIconImg = styled.img`
  width: 100%;
  display: block;
`;
const MainP = styled.p`
  font-size: 14px;
  text-decoration: none;
  margin-left: 20px;
`;
const ArrowIconCont = styled.div`
  width: 10px;
  display: block;
`;
const ArrowIconImg = styled.img`
  width: 100%;
  display: block;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

//Refer part from here
const ReferPart = styled.div`
  margin: 70px 20px;
`;
const ReferPartH5 = styled.h5`
  font-weight: 400;
  font-size: 15px;
`;
const ReferPartMainP = styled.p`
  font-size: 13px;
  color: #595959;
  margin: 20px 0;
  line-height: 18px;
`;
const ReferPartLessP = styled.p`
  font-size: 13px;
  color: #595959;
`;
const ReferPartLessPSpan = styled.span`
  color: black;
`;
const Invite = styled.a`
  text-decoration: none;
  color: #1446a0;
  font-size: 14px;
  border: 1px solid #333;
  padding: 8px 24px;
  display: inline-block;
  border-radius: 20px;
  margin-top: 20px;
  z-index: 10;
`;

const ForPosition = styled.div`
  position: relative;
`;
const PayPhotoDiv = styled.div`
  width: 270px;
  position: absolute;
  height: 130px;
  display: block;
  bottom: 10px;
  z-index: -1;
  left: 160px;
`;
const PayPhoto = styled.img`
  width: 100%;
  display: block;
  height: 100%;
`;
const LastP = styled.p`
  margin: 40px auto 20px;
  text-align: center;
  font-size: 12px;
  color: #333;
  line-height: 16px;
`;
