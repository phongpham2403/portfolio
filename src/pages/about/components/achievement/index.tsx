import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface AchievementProps {
  quantity: string;
  topWord: string;
  bottomWord: string;
}

const Achievement = ({ quantity, topWord, bottomWord }: AchievementProps) => {
  const cx = classNames.bind(styles);
  const plus = faPlus as IconProp;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("quantity")}>
        <h1>{quantity}</h1>
        <span>
          <FontAwesomeIcon icon={plus} />
        </span>
      </div>
      <div className={cx("name")}>
        <span>{topWord}</span>
        <span>{bottomWord}</span>
      </div>
    </div>
  );
};

export default Achievement;
