import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import React from "react";
import HomeScreen from "./Components/Home/HomeScreen";
import FooterScreen from "./Components/Footer/FooterScreen";
function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <HomeScreen></HomeScreen>
      <FooterScreen></FooterScreen>
    </React.Fragment>
  );
}

export default App;
