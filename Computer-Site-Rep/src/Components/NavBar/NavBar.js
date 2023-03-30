import React, { useEffect, useState, useRef } from "react";
import { Button, ButtonGroup, Image } from "@chakra-ui/react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import i18next from "i18next";
import { ChangeDirection } from "../../Context/LocaleProvider";
import { IsMobile } from "../../Context/Responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDisclosure } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Languages = [
  {
    code: "fa",
    name: "فارسی",
    country_code: "fa",
    dir: "rtl",
  },
  {
    code: "en",
    name: "English",
    country_code: "en",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "Arabic",
    country_code: "ar",
    dir: "rtl",
  },
];

function NavBar() {
  const isMobile = IsMobile();
  const changeDirection = ChangeDirection();
  const { t } = useTranslation();

  //************************** changing Direction of page **************************
  const CurrentLanguageCode = Cookies.get("i18next") || "fa";
  const CurrentLanguage = Languages.find((l) => l.code === CurrentLanguageCode);
  useEffect(() => {
    document.body.dir = CurrentLanguage.dir;
    changeDirection();
    // eslint-disable-next-line
  }, [CurrentLanguage]);
  //********************************************************************************

  return (
    <div>
      {!isMobile ? (
        <DesktopNavBar t={t} direction={CurrentLanguage.code}></DesktopNavBar>
      ) : (
        <MobileNavBar t={t} direction={CurrentLanguage.code}></MobileNavBar>
      )}
    </div>
  );
}

function DesktopNavBar({ t, direction }) {
  return (
    <div id="nav-Header">
      <Image src="./Assets/Images/computer.png" boxSize={"150px"} />
      <ButtonGroup
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        spacing={1}
      >
        <Button
          className="navButton"
          _focus={{ background: "#312CCE" }}
          fontSize={"2xl"}
          color={"white"}
          colorScheme={"transparent"}
          size={"lg"}
        >
          <Image
            src={"./Assets/Images/home.png"}
            w={6}
            h={6}
            marginInline={"2"}
            marginBottom={"2"}
          />
          {t("home")}
        </Button>
        <Button
          className="navButton"
          _focus={{ background: "#312CCE" }}
          fontSize={"2xl"}
          color={"white"}
          colorScheme={"transparent"}
          size={"lg"}
        >
          <Image
            src={"./Assets/Images/online-learning.png"}
            w={6}
            h={6}
            marginInline={"2"}
            marginBottom={"2"}
          />
          {t("courses")}
        </Button>
        <Button
          className="navButton"
          _focus={{ background: "#312CCE" }}
          fontSize={"2xl"}
          color={"white"}
          colorScheme={"transparent"}
          size={"lg"}
        >
          <Image
            src={"./Assets/Images/lecture.png"}
            w={6}
            h={6}
            marginInline={"2"}
            marginBottom={"2"}
          />
          {t("events")}
        </Button>
        <Button
          className="navButton"
          _focus={{ background: "#312CCE" }}
          fontSize={"2xl"}
          color={"white"}
          colorScheme={"transparent"}
          size={"lg"}
        >
          <Image
            src={"./Assets/Images/employee.png"}
            w={8}
            h={8}
            marginInline={"2"}
            marginBottom={"2"}
          />
          {t("about_us")}
        </Button>
        <Button
          className="navButton"
          _focus={{ background: "#312CCE" }}
          fontSize={"2xl"}
          color={"white"}
          colorScheme={"transparent"}
          size={"lg"}
        >
          <Image
            src={"./Assets/Images/headphone.png"}
            w={8}
            h={8}
            marginInline={"2"}
            marginBottom={"2"}
          />
          {t("contact_us")}
        </Button>
      </ButtonGroup>

      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle
          id="dropdown-autoclose-true"
          className="DropDownCustomNav"
        >
          <Image src={"./Assets/Images/globalIcon.png"} color={"white"}></Image>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              i18next.changeLanguage("fa");
            }}
            disabled={direction === "fa"}
            className="DropDownItem"
          >
            <Image
              boxSize={"40px"}
              src="./Assets/Images/irFlag.png"
              style={{ opacity: direction === "fa" ? 0.5 : 1 }}
            />
            {t("persian")}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              i18next.changeLanguage("en");
            }}
            disabled={direction === "en"}
            className="DropDownItem"
          >
            <Image
              boxSize={"40px"}
              src="./Assets/Images/enFlag.png"
              style={{ opacity: direction === "en" ? 0.5 : 1 }}
            />
            {t("english")}
          </Dropdown.Item>
          {/* <Dropdown.Item
            onClick={() => {
              i18next.changeLanguage("ar");
            }}
            disabled={direction === "ar"}
            className="DropDownItem"
          >
            <Image
              boxSize={"35px"}
              marginInline={0.5}
              src="./Assets/Images/arFlag.png"
              style={{ opacity: direction === "ar" ? 0.5 : 1 }}
            />
            {t("arabic")}
          </Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

function MobileNavBar({ t, direction }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [placement, setPlacement] = useState(
    direction === "rtl" ? "left" : "right"
  );

  useEffect(() => {
    setPlacement(placement === "left" ? "right" : "left");
    // eslint-disable-next-line

    debugger
  }, [direction]);

  return (
    <div id="nav-Header">
      <Button
        _focus={{ background: "#312CCE" }}
        color={"white"}
        colorScheme={"transparent"}
        onClick={onOpen}
        ref={btnRef}
      >
        <Icon as={GiHamburgerMenu} boxSize={10} />
      </Button>
      <Image src="./Assets/Images/computer.png" boxSize={"150px"} />
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle
          id="dropdown-autoclose-true"
          className="DropDownCustomNav"
        >
          <Image
            src={"./Assets/Images/globalIcon.png"}
            color={"white"}
            boxSize={10}
          ></Image>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              i18next.changeLanguage("fa");
            }}
            disabled={direction === "fa"}
            className="DropDownItem"
          >
            <Image
              boxSize={"40px"}
              src="./Assets/Images/irFlag.png"
              style={{ opacity: direction === "fa" ? 0.5 : 1 }}
            />
            {t("persian")}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              i18next.changeLanguage("en");
            }}
            disabled={direction === "en"}
            className="DropDownItem"
          >
            <Image
              boxSize={"40px"}
              src="./Assets/Images/enFlag.png"
              style={{ opacity: direction === "en" ? 0.5 : 1 }}
            />
            {t("english")}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent background={"#020224"}>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody background={"transparent"}>
            <ButtonGroup
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
            >
              <Button
                className="navButton"
                _focus={{ background: "#312CCE" }}
                fontSize={"2xl"}
                color={"white"}
                colorScheme={"transparent"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"start"}
                size={"lg"}
              >
                <Image
                  src={"./Assets/Images/home.png"}
                  w={6}
                  h={6}
                  marginInline={"2"}
                  marginBottom={"2"}
                />
                <Text w={"full"} textAlign={"center"}>
                  {t("home")}
                </Text>
              </Button>
              <Button
                className="navButton"
                _focus={{ background: "#312CCE" }}
                fontSize={"2xl"}
                color={"white"}
                colorScheme={"transparent"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"start"}
                size={"lg"}
              >
                <Image
                  src={"./Assets/Images/online-learning.png"}
                  w={6}
                  h={6}
                  marginInline={"2"}
                  marginBottom={"2"}
                />
                <Text w={"full"} textAlign={"center"}>
                  {t("courses")}
                </Text>
              </Button>
              <Button
                className="navButton"
                _focus={{ background: "#312CCE" }}
                fontSize={"2xl"}
                color={"white"}
                colorScheme={"transparent"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"start"}
                size={"lg"}
              >
                <Image
                  src={"./Assets/Images/lecture.png"}
                  w={6}
                  h={6}
                  marginInline={"2"}
                  marginBottom={"2"}
                />
                <Text w={"full"} textAlign={"center"}>
                  {t("events")}
                </Text>
              </Button>
              <Button
                className="navButton"
                _focus={{ background: "#312CCE" }}
                fontSize={"2xl"}
                color={"white"}
                colorScheme={"transparent"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"start"}
                size={"lg"}
              >
                <Image
                  src={"./Assets/Images/employee.png"}
                  w={6}
                  h={6}
                  marginInline={"2"}
                  marginBottom={"2"}
                />
                <Text w={"full"} textAlign={"center"}>
                  {t("about_us")}
                </Text>
              </Button>
              <Button
                className="navButton"
                _focus={{ background: "#312CCE" }}
                fontSize={"2xl"}
                color={"white"}
                colorScheme={"transparent"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"start"}
                size={"lg"}
              >
                <Image
                  src={"./Assets/Images/headphone.png"}
                  w={6}
                  h={6}
                  marginInline={"2"}
                  marginBottom={"2"}
                />
                <Text w={"full"} textAlign={"center"}>
                  {t("contact_us")}
                </Text>
              </Button>
            </ButtonGroup>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavBar;
