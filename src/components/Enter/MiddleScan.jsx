import React from "react";
import styled from "styled-components";
import peoplesData from "../../data/peoples.json"; // Import the JSON data
import businessData from "../../data/businesses.json"; // Import the JSON data

//Images
import QR from "../../assets/qr.png";
import Transfer from "../../assets/transfer.png";
import BankTransfer from "../../assets/bank.png";
import Bill from "../../assets/bill.png";
import Down from "../../assets/down.png";

export default function MiddleScan() {
  return (
    <>
      <div>
        <MiddleFirst>
          <EachMiddle>
            <EachMiddleImgCont>
              <img src={QR} alt="QR" />
            </EachMiddleImgCont>
            <P>
              Scan any <br /> QR code
            </P>
          </EachMiddle>
          <EachMiddle>
            <EachMiddleImgCont>
              <img src={Transfer} alt="Transfer" />
            </EachMiddleImgCont>
            <P>
              Send <br /> money
            </P>
          </EachMiddle>
          <EachMiddle>
            <EachMiddleImgCont>
              <img src={BankTransfer} alt="Bank Transfer" />
            </EachMiddleImgCont>
            <P>
              Bank <br /> Transfer
            </P>
          </EachMiddle>
          <EachMiddle>
            <EachMiddleImgCont>
              <img src={Bill} alt="Bill" />
            </EachMiddleImgCont>
            <P>
              Recharge <br /> and bills
            </P>
          </EachMiddle>
        </MiddleFirst>
        <Upiid>UPI ID: adilkt16@oksbi</Upiid>

        <MiddleSecond>
          <H3>People</H3>
          <AllPeople>
            {peoplesData.peoples.map((person) => (
              <EachPeople key={person.id}>
                <PeopleImgCont>
                  {person.letter_or_link.type === "text" ? (
                    <LetterDiv>
                      <PeopleImgText style={{ backgroundColor: person.color }}>
                        {person.letter_or_link.value}
                      </PeopleImgText>
                    </LetterDiv>
                  ) : (
                    <PeopleImg
                      src={person.letter_or_link.value}
                      alt="Each person"
                    />
                  )}
                </PeopleImgCont>
                <PeopleP>{person.name}</PeopleP>
              </EachPeople>
            ))}

            {/* <EachPeople>
              <PeopleImgCont>
                <PeopleImg src={Adil} alt="Each person" />
              </PeopleImgCont>
              <PeopleP>Fayez</PeopleP>
            </EachPeople>
            <EachPeople>
              <PeopleImgCont>
                <PeopleImg src={Adil} alt="Each person" />
              </PeopleImgCont>
              <PeopleP>Fayez</PeopleP>
            </EachPeople>
            <EachPeople>
              <PeopleImgCont>
                <PeopleImg src={Adil} alt="Each person" />
              </PeopleImgCont>
              <PeopleP>Fayez</PeopleP>
            </EachPeople>
            <EachPeople>
              <PeopleImgCont>
                <PeopleImg src={Adil} alt="Each person" />
              </PeopleImgCont>
              <PeopleP>Fayez</PeopleP>
            </EachPeople>
            <EachPeople>
              <PeopleImgCont>
                <PeopleImg src={Adil} alt="Each person" />
              </PeopleImgCont>
              <PeopleP>Fayez</PeopleP>
            </EachPeople>
            <EachPeople>
              <PeopleImgCont>
                <PeopleImg src={Adil} alt="Each person" />
              </PeopleImgCont>
              <PeopleP>Fayez</PeopleP>
            </EachPeople>
            <EachPeople>
              <PeopleImgCont>
                <PeopleImg src={Adil} alt="Each person" />
              </PeopleImgCont>
              <PeopleP>Fayez</PeopleP>
            </EachPeople> */}
            <EachPeople>
              <PeopleImgContDown>
                <PeopleImgDown src={Down} alt="Down Arrow" />
              </PeopleImgContDown>
              <PeopleP>More</PeopleP>
            </EachPeople>
          </AllPeople>
        </MiddleSecond>

        <MiddleBusiness>
          <H3>Businesses</H3>
          <AllPeople>
            {businessData.businesses.map((business) => (
              <EachPeople key={business.id}>
                <PeopleImgCont>
                  <LetterDiv>
                    <PeopleImgText style={{ backgroundColor: business.color }}>
                      {business.letter}
                    </PeopleImgText>
                  </LetterDiv>
                </PeopleImgCont>
                <PeopleP>{business.name}</PeopleP>
              </EachPeople>
            ))}
            <EachPeople>
              <PeopleImgContDown>
                <PeopleImgDown src={Down} alt="Down Arrow" />
              </PeopleImgContDown>
              <PeopleP>More</PeopleP>
            </EachPeople>
          </AllPeople>
        </MiddleBusiness>
      </div>
    </>
  );
}

const MiddleFirst = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: 12px;
  padding: 10px 0;
  margin: 0 36px;
`;
const EachMiddle = styled.div``;
const EachMiddleImgCont = styled.div`
  background-color: #d6efff;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
`;
const P = styled.p`
  color: black;
  line-height: 16px;
`;
const Upiid = styled.p`
  font-size: 12px;
  text-align: center;
  margin: 10px auto 0;
  background-color: #d6efff;
  width: fit-content;
  padding: 4px 12px;
  border-radius: 10px;
  display: block;
`;

const MiddleSecond = styled.div`
  margin: 30px 20px;
`;
const H3 = styled.h3`
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 20px;
`;
const LetterDiv = styled.div`
  border-radius: 50%;
  width: 50px;
  margin-bottom: 10px;
`;
const PeopleImgText = styled.p`
  font-size: 20px;
  font-weight: normal;
  border-radius: 50%;
  text-align: center;
  padding: 10px;
  color: white;
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
  width: 50px;
  display: block;
  margin: 0 auto;
`;
const PeopleImgContDown = styled.div`
  width: 50px;
  display: block;
  margin: 0 auto;
`;
const PeopleImg = styled.img`
  width: 50px;
  height: 44px;
  display: block;
  border-radius: 50%;
  margin: 0 auto 10px;
`;
const PeopleImgDown = styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
  margin: 0 auto 6px;
  border: 1px solid gray;
`;
const PeopleP = styled.p`
  font-size: 12px;
  text-align: center;
`;

const MiddleBusiness = styled.div`
  margin: 30px 20px;
`;
