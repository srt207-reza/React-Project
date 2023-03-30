import React, { useState, useEffect } from "react";
import "./navbar_screen.css";
// import { MegaMenu } from "primereact/megamenu";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import MyButton from "../../utils/myButton/my_button";

let Pixel = 20;

const Customdiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background-color: transparent;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: transparent;

  z-index: 9999;
  transition: 10ms;
`;

function NavbarScreen() {
  const [scrollPosition, setScrollPosition] = useState(0);

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

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  function isScrolled() {
    return Pixel - scrollPosition >= 0;
  }

  function scrollHeight() {
    return isScrolled() ? Pixel - scrollPosition : 0;
  }

  // let navigate = useNavigate();

  // let items = [
  //   {
  //     label: "صفحه اصلی",
  //     icon: "pi pi-fw pi-home",
  //     command: () => {
  //       navigate("/");
  //     },
  //   },
  //   {
  //     label: "دوره ها",
  //     icon: "pi pi-fw pi-book",
  //     command: () => {
  //       navigate("/Courses");
  //     },
  //   },
  //   // {
  //   //   label: "ارتباط با ما",
  //   //   icon: "pi pi-fw pi-envelope",
  //   //   command: () => {
  //   //     navigate("/AboutUs");
  //   //   },
  //   // },
  // ];

  return (
    <>
      {screenSize.dynamicWidth < 1200 ? (
        <>
          <div className="r1">
            <Link className="item" to={"/"}>
              <i className="pi pi-fw pi-home icon_nav"></i>
              <p>صفحه اصلی</p>
            </Link>
            <Link className="item" to={"/Courses"}>
              <i className="pi pi-fw pi-book icon_nav"></i>
              <p>دوره ها</p>
            </Link>
            {/* <Link className="item" to={"/AboutUs"}>
              <i className="pi pi-fw pi-envelope"></i>
              <p>ارتباط با ما</p>
            </Link>
            <Link className="item" to={"/Login"}>
              <i className="pi pi-fw pi-user"></i>
              <p>اکانت</p>
            </Link> */}
          </div>
        </>
      ) : (
        <Customdiv
          isScrolled={isScrolled()}
          width={screenSize.dynamicWidth}
          scrollHeight={scrollHeight}
        >
          <div className="row_navbar">
            <img
              className="img_app"
              src={require("../../assets/images/computer.png")}
              alt=""
            ></img>
            <Link className="item_desktop" to={"/"}>
              <i className="pi pi-fw pi-home icon_nav"></i>
              <p className="text_nav">صفحه اصلی</p>
            </Link>
            <Link className="item_desktop" to={"/Courses"}>
              <i className="pi pi-fw pi-book icon_nav"></i>
              <p className="text_nav">دوره ها</p>
            </Link>
          </div>
          {/* <MegaMenu
          className="color_menu"
            start={
              <img
                className="img_app"
                src={require("../../assets/images/cumputer.png")}
                alt=""
              ></img>
            }
            model={items}
            // end={
            //   <MyButton
            //     label={"ورود / ثبت نام"}
            //     icon={"pi pi-user"}
            //     iconPos={"left"}
            //     onClick={() => {
            //       navigate("/Login");
            //     }}
            //     type={"Warning"}
            //     haveRadius={true}
            //   ></MyButton>
            // }
          /> */}
          <img
            className="img_uni"
            src={require("../../assets/images/ustmb.png")}
            alt=""
          ></img>
        </Customdiv>
      )}
    </>
  );
}

export default NavbarScreen;
