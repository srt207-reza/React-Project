import styled from "@emotion/styled";
import React from "react";
import SectionOneIntroduce from "./IntroduceSection/SectionOne_Introduce";
import SectionTwoAboutUs from "./AboutUsSection/SectionTwo_AboutUs";
import SectionThreeCourses from "./CourseSection/SectionThree_Courses";

function HomeScreen() {
  return (
    <div>
      <CustomDivHomeScreen>
        <SectionOneIntroduce></SectionOneIntroduce>
        <SectionTwoAboutUs></SectionTwoAboutUs>
      </CustomDivHomeScreen>
      <SectionThreeCourses></SectionThreeCourses>
    </div>
  );
}

export default HomeScreen;

const CustomDivHomeScreen = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  padding: 2rem 10%;
`;
