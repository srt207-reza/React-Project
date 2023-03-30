import styled from "@emotion/styled";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { UseDirection } from "../../../Context/LocaleProvider";
import CustomButton from "../../../Utils/CustomButton/CustomButton";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./SectionThree_Courses.css";
import CustomCardCourse from "../../../Utils/CustomCardCourse/CustomCardCourse";
import { IsMobile } from "../../../Context/Responsive";

function SectionThreeCourses() {
  const Direction = UseDirection();
  const [t] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = IsMobile();

  const Items = [
    {
      img: "./Assets/Images/basic_cpp.jpg",
      Title: "خرید دوره",
      discribe: "",
      buttonText: "خرید دوره",
    },
    {
      img: "./Assets/Images/basic_cpp.jpg",
      Title: "خرید دوره",
      discribe: "",
      buttonText: "خرید دوره",
    },
    {
      img: "./Assets/Images/basic_cpp.jpg",
      Title: "خرید دوره",
      discribe: "",
      buttonText: "خرید دوره",
    },
    {
      img: "./Assets/Images/basic_cpp.jpg",
      Title: "خرید دوره",
      discribe: "",
      buttonText: "خرید دوره",
    },
    {
      img: "./Assets/Images/basic_cpp.jpg",
      Title: "خرید دوره",
      discribe: "",
      buttonText: "خرید دوره",
    },
    {
      img: "./Assets/Images/basic_cpp.jpg",
      Title: "خرید دوره",
      discribe: "",
      buttonText: "خرید دوره",
    },
    {
      img: "./Assets/Images/basic_cpp.jpg",
      Title: "خرید دوره",
      discribe: "",
      buttonText: "خرید دوره",
    },
    {
      img: "./Assets/Images/basic_cpp.jpg",
      Title: "خرید دوره",
      discribe: "",
      buttonText: "خرید دوره",
    },
    {
      img: "./Assets/Images/basic_cpp.jpg",
      Title: "خرید دوره",
      discribe: "",
      buttonText: "خرید دوره",
    },
    {
      img: "./Assets/Images/basic_cpp.jpg",
      Title: "خرید دوره",
      discribe: "",
      buttonText: "خرید دوره",
    },
  ];

  return (
    <>
      <CourseTitle>
        <CustomH1Course>{t("learingCourses")}</CustomH1Course>
      </CourseTitle>
      <CourseContainer
        style={{
          height: isOpen
            ? `${
                (isMobile ? Items.length : Math.ceil(Items.length / 3)) * 450
              }px`
            : "500px",
          backgroundColor: isOpen ? "transparent" : "#090B3F",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        isOpen={isOpen}
      >
        {Items.map((e) => {
          return <CustomCardCourse img={e.img}></CustomCardCourse>;
        })}
      </CourseContainer>
      <div className="SectionOneButtonCourse">
        <CustomButton
          text={!isOpen ? t("showAll") : t("closeAll")}
          className={"SectionOneButton-" + Direction}
          children={
            Direction === "rtl" ? (
              <BsArrowLeftCircle
                className={"SectionOneButtonIcon-" + Direction}
              />
            ) : (
              <BsArrowRightCircle
                className={"SectionOneButtonIcon-" + Direction}
              />
            )
          }
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        ></CustomButton>
      </div>
    </>
  );
}

export default SectionThreeCourses;

const CourseTitle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 100px;
`;

const CustomH1Course = styled.p`
  position: relative;
  font-size: 60px;
  &::after {
    position: absolute;
    top: -10px;
    left: 25%;
    border-radius: 10px;
    content: "";
    width: 50%;
    height: 8px;
    background-color: #332fd0;
  }
`;

const CourseContainer = styled.div`
  position: relative;
  width: 100%;
  transition: 300ms;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  overflow: hidden;

  &::before {
    position: absolute;
    bottom: 0;
    margin-bottom: -10px;
    content: "";
    width: 100%;
    height: ${(props) => (props.isOpen ? "0px" : "90px")};
    filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.512);
    opacity: ${(props) => (props.isOpen ? 0 : 1)};
    transition: all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s;
    z-index: 100;
  }
`;
