import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
// import { motion } from "framer-motion";
// import { Card } from "primereact/card";
import "./MyCard.css";
// import styled from "styled-components";

function MyCard({ title, price, id, imgSrc }) {
  let navigate = useNavigate();
  return (
    <>
      <div className="MyCard">
        <img className="card_img" src={imgSrc} alt="img"></img>
        <div className="details">
          <p className="title_style_card">{title}</p>
          <div className="deep_details">
            <p className="price_font">قیمت : {price.toLocaleString()} تومان</p>
            <Button
              label={"جزئیات دوره"}
              icon={"pi pi-exclamation-circle"}
              iconPos={"left"}
              onClick={() => {
                navigate(`${id}`);
              }}
              className="color btn_details"
            />
          </div>
        </div>
      </div>
    </>

    // <Card
    //   title={title}
    //   subTitle={"قیمت دوره : " + price + " تومان"}
    //   footer={() => (
    //     <MyButton
    //       icon={"pi pi-user-plus"}
    //       iconPos={"left"}
    //       label={"ثبت نام دوره"}
    //       onClick={() => {
    //         navigate(`Courses/${id}`);
    //       }}
    //     ></MyButton>
    //   )}
    //   header={() => (
    //     <img className="img_mycard" src={require('/public/assets/images/windows.jpg')} alt=""></img>
    //   )}
    //   className="myCard"
    // >
    //   <p className="m-0">
    //     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
    //   </p>
    // </Card>
  );
}

export default MyCard;
