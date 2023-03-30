import styled from "@emotion/styled";
import React from "react";
import { useTranslation } from "react-i18next";

function FooterScreen() {
  const [t] = useTranslation();

  return (
    <CustomFooterDiv>
      {t("footerCreditSpecial")}
      <CustomH1Footer>
        {t("computerScienceForum") +
          " " +
          t("mazandaranUniversityOfScienceAndTechnology")}
      </CustomH1Footer>
      {t("footerCreditSpecial2")}
    </CustomFooterDiv>
  );
}

export default FooterScreen;

const CustomH1Footer = styled.div`
  margin-inline: 4px;
  color: #ffac41;
`;

const CustomFooterDiv = styled.div`
  margin-top: 150px;
  position: relative;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #070932;
  border-top: 4px solid #1b208d;
`;
