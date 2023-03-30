import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <div className="AboutUs_Container">
        <div className="AboutUs_Box">
          <h3 className="aboutUs_title">
            <i className="pi pi-building custom_icon_aboutus"></i>اتاق انجمن
            علوم کامپیوتر :
          </h3>
          <h3 className="aboutUs_detail">
            ساختمان قدیم - ورودی اصلی - طبقه همکف - در کنار کوچه سلف دانشگاه
          </h3>
          <h3 className="aboutUs_title">
            {" "}
            <i className="pi pi-telegram custom_icon_aboutus"></i>
            کانال تلگرامی انجمن :
          </h3>
          <a className="aboutUs_detail" href="https://t.me/OFU_CSSC">
            OFU_CSSC
          </a>
          <h3 className="aboutUs_title">
            <i className="pi pi-phone custom_icon_aboutus"></i>
            راه های ارتباطی انجمن :
          </h3>
          <a className="aboutUs_detail" href="https://t.me/Ali_ar_h">
            Ali_ar_h
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
