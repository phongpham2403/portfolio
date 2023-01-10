import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Button from "../../components/button/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const cx = classNames.bind(styles);
  return (
    <>
      <div className={cx("overlay")}></div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className={cx("wrapper")}
      >
        <div className={cx("rotate-block")}></div>
        <div className={cx("avatar")}>
          <img
            src="https://res.cloudinary.com/de4aiajqg/image/upload/v1673354193/portfolio/babd06440c8cc8d2919d_oys83o.jpg"
            alt="avatar"
          />
        </div>
        <div className={cx("info")}>
          <div className={cx("name")}>
            <span>I'm Hoang Phong</span>
            <span>Web Developer!</span>
          </div>
          <div className={cx("description")}>
            <p>
              Hello mọi người! Mình là Phong, tốt nghiệp trường Đại học GTVT. Cơ
              duyên mình đến với IT là nhờ các sự tích "IT là vua của các nghề",
              hay câu chuyện "thằng em học BK cơ khí sinh năm 96". Tháng 5/2021,
              tình cờ biết đến cộng đồng F8 Fullstack của anh Sơn, mình đã hoàn
              thành các khóa học HTML, CSS, ReactJS và có được một số dự án cá
              nhân. Trải qua nhiều cay đắng, thật sự cảm ơn anh Sơn cũng như
              cộng đồng anh em đóng góp đã truyền động lực cho mình suốt thời
              gian qua giúp mình không bỏ cuộc.
            </p>
          </div>
          <div className={cx("more")}>
            <Link to="/portfolio">
              <span className={cx("more-me")}>
                <Button icon={faArrowRight} label="portfolio" rounded />
              </span>
            </Link>
            <Link to="/about">
              <span className={cx("about-me")}>
                <Button icon={faArrowRight} label="about" rounded />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
