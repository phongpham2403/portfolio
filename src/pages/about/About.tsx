import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames/bind";
import { skillList } from "../../common/data";
import Button from "../../components/button/Button";
import PageHeader from "../../components/page-header/PageHeader";
import styles from "./About.module.scss";
import Achievement from "./components/achievement";
import Education from "./components/education";
import Skill from "./components/skill";

const About = () => {
  const cx = classNames.bind(styles);
  return (
    <>
      <div className={cx("overlay")}></div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className={cx("wrapper")}
      >
        <div className={cx("header")}>
          <PageHeader title="resume" lastWord="me" restWord="about" />
        </div>
        <div className={cx("about_me")}>
          <div data-aos="fade-up-right" className={cx("info")}>
            <div className={cx("personal")}>
              <h2>Personal Infos</h2>
              <div className={cx("details")}>
                <div className={cx("left")}>
                  <p>
                    <span>First Name:</span> Phong
                  </p>
                  <p>
                    <span>Birthday:</span> 24/03/2000
                  </p>
                  <p>
                    <span>National:</span> VietNam
                  </p>
                  <p>
                    <span>Phone:</span> 394580324
                  </p>
                </div>
                <div className={cx("right")}>
                  <p>
                    <span>Last Name:</span> Pham
                  </p>
                  <p>
                    <span>Sex:</span> Male
                  </p>
                  <p>
                    <span>Address:</span> Q.12 HCM
                  </p>
                  <p>
                    <span>Email:</span>
                    phong.pnhoang@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1FNveGXd7gZ1jhcXW6fNbXmh3kMc0l-Ss/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button label="My CV" icon={faGoogleDrive} rounded />
            </a>
          </div>
          <div data-aos="fade-up-left" className={cx("achievement")}>
            <Achievement
              quantity="1"
              topWord="month of"
              bottomWord="experience"
            />
            <Achievement
              quantity="4"
              topWord="completed"
              bottomWord="projects"
            />
            <Achievement
              quantity="1"
              topWord="Personal"
              bottomWord="certificate of merit"
            />
            <Achievement
              quantity="3"
              topWord="certificate"
              bottomWord="of F8 front-end course completion"
            />
          </div>
        </div>
        <div className={cx("separator")}></div>
        <div className={cx("skills")}>
          <h1 className={cx("skills_header")}>My skills</h1>
          <div className={cx("skill")}>
            {skillList.map((skill) => (
              <Skill key={skill.id} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>
        <div className={cx("separator")}></div>
        <div className={cx("education")}>
          <h1 className={cx("education_header")}>EDUCATION & EXPERIENCE</h1>
          <div className={cx("education_content")}>
            <div className={cx("left")}>
              <Education
                date="2018"
                title="Vo Nguyen Giap"
                tag="high school"
                description="T??i b???t ?????u quan t??m ?????n ng??nh c??ng ngh??? th??ng tin v?? c???m gi??c th??ch th?? khi gi???i quy???t c??c v???n ????? trong l???p tr??nh m?? t??i ???? h???c ??? tr?????ng trung h???c."
              />
              <Education
                date="2018 - 2022"
                title="University of transport HCM city"
                tag="University"
                description="T??i b???t ?????u nh???ng ki???n th???c l???p tr??nh ??? tr?????ng ?????i h???c v?? ho??n th??nh c??c kh??a h???c tr??n web education F8 FullStack. "
              />
              <Education
                date="2022"
                title="University of transport HCM city"
                tag="University"
                description="T??i b???t ?????u l??m ????? ??n v?? projects b???ng ki???n th???c c???a m??nh. T??i ???? d???n c???i thi???n ???????c kh??? n??ng gi???i quy???t v???n ????? trong qu?? tr??nh x??y d???ng m???t trang web"
              />
            </div>
            <div data-aos="fade-left" className={cx("right")}>
              <Education
                date="2022"
                title="IT Company"
                tag="internship"
                description="T??i b???t ?????u qu?? tr??nh th???c t???p ???????c kho???ng 1 th??ng v???i v??? tr?? react developer. T???i ????y t??i ???? h???c ???????c m???t s??? kinh nghi???m trong ph??t tri???n web"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
