import React, { useState } from "react";
import styled from "styled-components";

export const IrregularSectionComponent = () => {
  const [buttonState, setButtonState] = useState([false, false]);

  const handleClick = (id) => {
    // buttonState = false -> true
    // buttonState = true -> false
    setButtonState((prevState) => ({
      ...(prevState[id] = !prevState[id]),
      [id]: !prevState[id],
    }));
  };

  return (
    <SectionWrapper>
      <SectionTop>
        <SectionLeft>
          <Item width={430}>
            <SpanItem heightState={buttonState[0]}>
              <DivItem>
                <H2Item>Texto de prueba</H2Item>
                <ButtonItem onClick={() => handleClick(0)}>Open</ButtonItem>
              </DivItem>
            </SpanItem>
          </Item>
        </SectionLeft>
        <SectionRight>
          <Item width={800}>
            <SpanItem heightState={buttonState[1]}>
              <DivItem>
                <H2Item>Texto de prueba</H2Item>
                <ButtonItem onClick={() => handleClick(1)}>Open</ButtonItem>
              </DivItem>
            </SpanItem>
          </Item>
        </SectionRight>
      </SectionTop>
      <SectionBottom>
        <LongItemComponent />
      </SectionBottom>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin: 100px 0px 150px 0px;
`;

const SectionTop = styled.section`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const SectionLeft = styled.section`
  display: flex;
`;

const Item = styled.div`
  background-color: #e3e3e3;
  width: ${(props) => props.width}px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SpanItem = styled.span`
  width: 100%;
  display: flex;
  align-items: flex-end;
  height: ${(props) => (props.heightState ? "100%" : "80px")};
  transition: height 0.5s ease-in-out;
  background-color: #0056fd;
`;

const DivItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonItem = styled.button`
  width: 100px;
  height: 40px;
  background-color: #fff;
  color: #0056fd;
  margin-right: 20px;
  font-weight: bold;
`;

const H2Item = styled.h2`
  color: #fff;
  margin-left: 20px;
`;

const SectionRight = styled.section``;

const SectionBottom = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LongItemComponent = styled.span`
  width: 1260px;
  height: 80px;
  background-color: #0056fd;
  margin-top: 30px;
`;
