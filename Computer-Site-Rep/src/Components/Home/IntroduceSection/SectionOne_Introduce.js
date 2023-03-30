import React from "react";
import { useTranslation } from "react-i18next";
import { Image } from "@chakra-ui/react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import CustomButton from "../../../Utils/CustomButton/CustomButton";
import "./SectionOne_Introduce.css";
import { UseDirection } from "../../../Context/LocaleProvider";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import styled from "@emotion/styled";

export default function SectionOneIntroduce() {
  const { t } = useTranslation();
  const Direction = UseDirection();

  return (
    <div className="SectionOneContainer">
      <div className="SectionOneRightSide">
        <div className="labelOne-firstSection"></div>
        <h1 className="SectionOneTitle">
          {t("computerScienceForum")}
          <br />
          <span className="SectionOneInsideTitle">
            {t("mazandaranUniversityOfScienceAndTechnology")}
          </span>
        </h1>
        <Typewriter
          options={{
            strings: t("responsibleAndOrganizerOfEvents"),
            autoStart: true,
          }}
        />
        <CustomButton
          className={"SectionOneButton-" + Direction}
          text={t("viewCourses")}
        >
          {Direction === "rtl" ? (
            <BsArrowLeftCircle
              className={"SectionOneButtonIcon-" + Direction}
            />
          ) : (
            <BsArrowRightCircle
              className={"SectionOneButtonIcon-" + Direction}
            />
          )}
        </CustomButton>

        {/* <Image
          src="./Assets/Images/7.png"
          alt=""
          class={"SectionOneTemplateImage-" + Direction}
        /> */}
      </div>
      <div className="SectionOneLeftSide">
        <div className="SectionOneBanner">
          <div className="SectionOneBannerParent">
            <Image
              src="./Assets/Images/1.png"
              alt=""
              className={"banner-img-" + Direction}
            />
          </div>

          <Image
            src="./Assets/Images/2.png"
            alt=""
            class={"The-first-hexagon-" + Direction}
          />

          <Image
            src="./Assets/Images/3.png"
            alt=""
            class={"The-second-hexagon-" + Direction}
          />

          <div className={"The-first-line-" + Direction}></div>
        </div>
        <div className={"SectionOneSiteDetails siteDetails-" + Direction}>
          <div class="Active-students">
            <CountUp delay={1.5} className="number" end={300} duration={5} />
            <span class="plus">+</span>
            <br />
            <span class="title">{t("activeStudents")}</span>
          </div>
          <div class="Events-carried-out">
            <CountUp delay={1.5} className="number" end={50} duration={5} />
            <span class="plus">+</span>
            <br />
            <span class="title">{t("eventsHeld")}</span>
          </div>
          <div class="Active-courses">
            <CountUp delay={1.5} className="number" end={80} duration={5} />
            <span class="plus">+</span>
            <br />
            <span class="title">{t("activeCourses")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ImageDots = styled.img`
  width: 60px;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  ${(props) => (!(props.direction === "rtl") ? "left: 40px;" : "right: 40px;")}
  opacity: 0.6;
  transform: translateY(-80px);
`;
