import React from "react";
import styled from "@emotion/styled";

function CustomCardCourse({ img, content, onClick, ButtonText }) {
  return (
    <>
      <CustomCardDiv>
        <CardContainer>
          <Img src={img} alt="" />
          {content}
        </CardContainer>
      </CustomCardDiv>
    </>
  );
}

export default CustomCardCourse;

const CustomCardDiv = styled.div`
  flex: 1 1 30%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  border-radius: 20px;
  margin-block: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  border-radius: 20px;
  top: 0;
  left: 0;
`;
