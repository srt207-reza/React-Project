import React from "react";
import "./home_screen.css";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import linux from "../../assets/images/linux.png";
import windows from "../../assets/images/Windows11.png";

function HomeScreen() {
  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <section className="Section_HomeScreen">
          <div className="Container_HomeScreen">
            <p className="title">
              انجمن علمی کامپیوتر علوم و فنون بابل
            </p>
          </div>
        </section>
        <div className="row_div_home">
          <p className="text_homeScreen">
            <h2>آموزش برنامه نویسی</h2>
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
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <div className="circle_div_home_screen">
            <img className="img_html" src={html} alt="html"></img>
            <img className="img_css" src={css} alt="css"></img>
            <img className="img_js" src={js} alt="js"></img>
          </div>
        </div>
        <div className="row_div_home">
          <p className="text_homeScreen">
            <h2>آموزش سیستم عامل</h2>
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
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <div className="img_win">
            <img className="img_linux" src={linux} alt=""></img>
            <img className="img_windows" src={windows} alt=""></img>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default HomeScreen;
