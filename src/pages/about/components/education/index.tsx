import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBriefcaseClock,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface EducationProps {
  date: string;
  title: string;
  tag: string;
  description: string;
}

const Education = ({ date, title, tag, description }: EducationProps) => {
  const cx = classNames.bind(styles);
  const clock = faBriefcaseClock as IconProp;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("icon")}>
        <FontAwesomeIcon icon={clock} />
      </div>
      <div className={cx("content")}>
        <span className={cx("date")}>{date}</span>
        <div className={cx("title")}>
          <span className={cx("des")}>{title}</span>
          <span className={cx("tag")}>- {tag}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Education;
