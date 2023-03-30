import React from "react";
import MyCard from "../../utils/myCard/MyCard";
import "./course_screen.css";
import { motion } from "framer-motion";
import img1 from "../../assets/images/photo_3.jpg";
import img2 from "../../assets/images/Poster.jpg";
import img3 from "../../assets/images/photo_2.jpg";

function CourseScreen() {

  let dataItems = [
    { id: 1, price: 25_500, title: "ویندوز", imgSrc: img1 },
    { id: 2, price: 90_000, title: "پایتون", imgSrc: img1 },
    { id: 3, price: 80_000, title: "برنامه نویسی پیشرفته", imgSrc: img3 },
    { id: 4, price: 65_000, title: "فرانت اند", imgSrc: img1 },
    { id: 5, price: 80_000, title: "لینوکس", imgSrc: img1 },
    { id: 6, price: 50_000, title: "سی پلاس پلاس", imgSrc: img2 },
  ];

  return (
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        
          <div className="items">
            {dataItems.map((item) => (
              <div key={item.id} >
                <MyCard {...item} />
              </div>
            ))}
          </div>

      </motion.div>
  );
}

export default CourseScreen;
