import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { UseDirection } from "../../../Context/LocaleProvider";
import { UseWidth } from "../../../Context/Responsive";
import "./SectionTwo_AboutUs.css";
import styled from "@emotion/styled";
import { useInView } from "framer-motion";

function SectionTwoAboutUs() {
  const direction = UseDirection();
  const ContainerRef = useRef(null);
  const isInViewLeftSide = useInView(ContainerRef, {
    once: true,
    margin: "0px 600px 0px 0px",
  });
  const { t } = useTranslation();
  const width = UseWidth();

  return (
    <div className="SectionTwoContainer" ref={ContainerRef}>
      <section className="SectionTwoRightSide">
        <Divider direction={direction}></Divider>                         
        <ImageLeftSide
          src="./Assets/Images/5.png"
          direction={direction}
          width={width}
        ></ImageLeftSide>
        <ImageHexagonOne
          src="./Assets/Images/2.png"
          direction={direction}
          class={"hexagon"}
        ></ImageHexagonOne>
        <ImageHexagonTwo
          direction={direction}
          src="./Assets/Images/3.png"
        ></ImageHexagonTwo>
      </section>
      <SectionTwoLeftSide>
        <SectionTwoLeftSideInside
          style={{
            transform: isInViewLeftSide
              ? "none"
              : direction === "rtl"
              ? "translateX(-200px)"
              : "translateX(200px)",
            opacity: isInViewLeftSide ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <ImageDots
            src="./Assets/Images/6.png"
            direction={direction}
          ></ImageDots>
          <SectionTwoTitleAboutUs direction={direction}>
            <h1>{t("about_us")}</h1>
            <div className="divider"></div>
            <div className="H1-title-sectionTwo"></div>
          </SectionTwoTitleAboutUs>
          <SectinoTwoIntroduction direction={direction}>
            <h1 className="title-sectionTwo">{t("aboutAssociation")}</h1>
            <p className="SectionTwo-Discribe">{t("discribeAssociation")}</p>
          </SectinoTwoIntroduction>
        </SectionTwoLeftSideInside>
      </SectionTwoLeftSide>
    </div>
  );
}

export default SectionTwoAboutUs;

const SectionTwoLeftSide = styled.section`
  width: 50%;
  display: flex;
  height: 100%;
  overflow: hidden;
`;

const SectionTwoLeftSideInside = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: relative;
  ${(props) =>
    props.isInView ? "transform: none;" : "transform: translateX(200px);"};
  ${(props) => (props.isInView ? "opacity: 1;" : "opacity: 0;")};
  transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s";
`;

const SectionTwoTitleAboutUs = styled.div`
  width: 150px;
  font-size: 30px;
  text-align: center;
  color: #ffac41;
  ${(props) => (!props.direction === "rtl" ? "left: 50px;" : "right: 50px;")};
`;

const SectinoTwoIntroduction = styled.div`
  top: 80px;
  width: 90%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: transparent;
`;

const Divider = styled.div`
  width: 15%;
  border-radius: .5rem;
  height: .5rem;
  background-color: #FFAC41;
  transform: ${(props) =>
    !(props.direction === "rtl")
      ? "translateX(-30px) translateY(-110px)"
      : "translateX(30px) translateY(-110px)"};
  position: absolute;
  ${(props) =>
    !(props.direction === "rtl")
      ? "left:-10%;"
      : "rihgt:-10%;"};
  
`;

const ImageDots = styled.img`
  width: 180px;
  object-fit: contain;
  position: absolute;
  top: 30%;
  ${(props) => (!(props.direction === "rtl") ? "right: 20px;" : "left: 20px;")}
  opacity: 0.6;
  transform: translateY(-200px);
`;

const ImageLeftSide = styled.img`
  width: 100%;
  object-fit: contain;
  min-width: 750px;
  transform: ${(props) =>
    !(props.direction === "rtl")
      ? "translateX(-180px) translateY(-300px) rotateY(180deg)"
      : "translateX(180px) translateY(-300px) rotateY(0deg)"};
`;

const ImageHexagonOne = styled.img`
  width: 200px;
  position: absolute;
  bottom: 0;
  ${(props) =>
    !(props.direction === "rtl") ? "right: 120px;" : "left: 120px;"}
  -webkit-animation: first-spin 8s linear infinite;
  -moz-animation: first-spin 8s linear infinite;
  animation: first-spin 8s linear infinite;
  z-index: 100;
`;

const ImageHexagonTwo = styled.img`
  width: 100px;
  position: absolute;
  bottom: 0;
  ${(props) => (!(props.direction === "rtl") ? "right: 60px;" : "left: 60px;")}
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  z-index: 99;
`;
