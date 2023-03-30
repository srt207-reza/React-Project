import React, { useState } from "react";
import MyButton from "../../utils/myButton/my_button";
import MyTextfield from "../../utils/myTextfield/my_textfield";
import "./login_screen.css";
import { Checkbox } from "primereact/checkbox";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { motion } from "framer-motion";

function FirstScreen({ onClick }) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="login_box">
          <img
            className="img_Login"
            src={require("../../assets/images/cumputer.png")}
            alt=""
          ></img>
          <MyTextfield
            label={"شماره همراه"}
            icon={"pi pi-user"}
            className="custom_TextField"
          ></MyTextfield>
          <MyTextfield
            label={"پسوورد"}
            icon={"pi pi-lock"}
            className="custom_TextField"
          ></MyTextfield>
          <div className="div_Custom_Login">
            <Checkbox
              onChange={(e) => setChecked(e.checked)}
              checked={checked}
              className="custom_CheckBox"
            ></Checkbox>
            <h5>پسوورد ذخیره شود</h5>
          </div>

          <MyButton
            label={"ورود"}
            icon="pi pi-sign-in"
            iconPos={"left"}
            onClick={() => {}}
            haveRadius={"true"}
          ></MyButton>
          <Divider type="solid" align="center">
            <b>یا</b>
          </Divider>
          <div className="footer_Login">
            <Button
              label="ثبت نام"
              className="p-button-outlined"
              onClick={onClick}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

function SecondScreen({ onClick }) {
  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="login_box">
          <img
            className="img_Login"
            src={require("../../assets/images/cumputer.png")}
            alt=""
          ></img>
          <MyTextfield
            label={"نام و نام خانوادگی"}
            icon={"pi pi-user"}
            className="custom_TextField"
          ></MyTextfield>
          <MyTextfield
            label={"شماره همراه"}
            icon={"pi pi-phone"}
            className="custom_TextField"
          ></MyTextfield>
          <MyTextfield
            label={"شماره دانشجویی"}
            icon={"pi pi-user"}
            className="custom_TextField"
          ></MyTextfield>
          <MyTextfield
            label={"پسوورد"}
            icon={"pi pi-lock"}
            className="margin-bottom"
          ></MyTextfield>

          <MyButton
            label={"ثبت نام"}
            icon="pi pi-user-plus"
            iconPos={"left"}
            onClick={() => {}}
          ></MyButton>
          <Divider type="solid" align="center">
            <b>یا</b>
          </Divider>
          <div className="footer_Login">
            <Button
              label="ورود"
              className="p-button-outlined"
              onClick={onClick}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="Login_Container">
        <div className="bg_image"></div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: -50, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img
            className="img_logo_Login"
            src={require("../../assets/images/mazandaran_logo.png")}
            alt=""
          ></img>
        </motion.div>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: -50 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          {isLogin ? (
            <FirstScreen
              onClick={() => {
                setIsLogin(false);
              }}
            ></FirstScreen>
          ) : (
            <SecondScreen
              onClick={() => {
                setIsLogin(true);
              }}
            ></SecondScreen>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default LoginScreen;
