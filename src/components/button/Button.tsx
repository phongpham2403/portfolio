import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
  icon?: IconDefinition | IconProp;
  rotate?: boolean;
  label: string;
  circle?: boolean;
  rounded?: boolean;
  isMenu?: boolean;
  defaultBtn?: boolean;
  className?: any;
  onClick?: () => void;
}

const Button = ({
  label,
  icon,
  rotate,
  rounded,
  isMenu,
  defaultBtn,
  className,
  onClick,
}: ButtonProps) => {
  const cx = classNames.bind(styles);
  const classes = cx("wrapper", {
    [className]: className,
    isMenu,
    defaultBtn,
    rotate,
    rounded,
  });

  const propsIcon = icon as IconProp;

  return (
    <span onClick={onClick} className={classes}>
      <span className={cx("icon")}>
        <FontAwesomeIcon className={cx("arrow", { rotate })} icon={propsIcon} />
      </span>
      <span className={cx("label")}>{label}</span>
    </span>
  );
};

export default Button;
