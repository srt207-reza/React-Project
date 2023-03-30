import React from "react";
import { motion } from "framer-motion";
import "./CourseDetailsScreen.css";
import MyButton from "../../utils/myButton/my_button";

function CourseDetailsScreen({ title }) {
  return (
    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <div className="CourseDetails_Styled">
        <div className="right_side_details">
          <img
            className="img_details_course"
            src={require("../../assets/images/photo_2.jpg")}
            alt=""
          ></img>
          <div className="text_container">
            <div className="price_style">
              <i className="pi pi-book icon_size"></i>
              <h5>آموزش برنامه نویسی پیشرفته</h5>
            </div>
            <div className="price_style">
              <i className="pi pi-money-bill icon_size"></i>
              <p>قیمت : 80,000 تومان</p>
            </div>
            <div className="price_style">
              <i className="pi pi-user icon_size"></i>
              <p>مدرس : مهندس سفیدگر</p>
            </div>
            <MyButton
              label={"خرید دوره"}
              icon={"pi pi-shopping-cart"}
              iconPos={"left"}
              onClick={() => {}}
              fullSize={true}
            ></MyButton>
          </div>
        </div>
        <div className="left_side_details">
          <h1>برنامه نویسی پیشرفته</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default CourseDetailsScreen;
