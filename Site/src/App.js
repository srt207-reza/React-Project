import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavbarScreen from "./components/navbar/navbar_screen";
import HomeScreen from "./components/home/home_screen";
import CourseScreen from "./components/coursePage/course_screen";
// import AboutUs from "./components/aboutUs/AboutUs";
// import LoginScreen from "./components/login/login_screen";
import CourseDetailsScreen from "./components/courseDetailsScreen/CourseDetailsScreen";
import Footer from "./components/footer/footer";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: ${(props) => props.padding ? 0 : 30}px;
  padding-bottom: 20px;
  height: max-content;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
`;

function App() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <>
      <Container padding={screenSize.dynamicWidth < 1200}>
        <BrowserRouter>
          <NavbarScreen></NavbarScreen>

          <div>
            <Routes>
              <Route exact path="/" element={<HomeScreen />}></Route>
              <Route path="/Courses" element={<CourseScreen />}></Route>
              <Route
                path="/Courses/:id"
                element={<CourseDetailsScreen />}
              ></Route>
              {/* <Route path="/AboutUs" element={<AboutUs />}></Route> */}
              {/* <Route path="/Login" element={<LoginScreen />}></Route> */}
              <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
