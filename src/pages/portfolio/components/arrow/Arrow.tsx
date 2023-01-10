import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Arrow.module.scss";

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => {
  const right = faAngleRight as IconProp;
  const cx = classNames.bind(styles);
  return (
    <div className={cx("next")} onClick={onClick}>
      <div className={cx("icon")}>
        <FontAwesomeIcon icon={right} />
      </div>
    </div>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  const left = faAngleLeft as IconProp;
  const cx = classNames.bind(styles);
  return (
    <div className={cx("prev")} onClick={onClick}>
      <div className={cx("icon")}>
        <FontAwesomeIcon icon={left} />
      </div>
    </div>
  );
};

export { NextArrow, PrevArrow };
