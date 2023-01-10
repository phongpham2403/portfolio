import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  NextArrow,
  PrevArrow,
} from "../../pages/portfolio/components/arrow/Arrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ModalProps {
  selectedProject?: {
    id: number;
    header: string;
    image: {
      id: number;
      url: string;
    }[];
    description: string;
    created: string;
    role: string;
    frontend: string;
    backend: string;
    demo: string;
  };
  onClose: () => void;
}

const Modal = ({ onClose, selectedProject }: ModalProps) => {
  const cx = classNames.bind(styles);
  const SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: JSX.Element) => <ul>{dots}</ul>,
    customPaging: (i: number) => (
      <img
        className="dot_img"
        alt=""
        src={selectedProject?.image.find((img) => img.id === i + 1)?.url}
      />
    ),
  };

  const closeIcon = faClose as IconProp;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("overlay")}></div>
      <div onClick={onClose} className={cx("close")}>
        <FontAwesomeIcon icon={closeIcon} />
      </div>
      <div className={cx("container")}>
        <div className={cx("introduce")}>
          <h3>Movie app</h3>
          <div className={cx("slider")}>
            <Slider className={cx("slider_content")} {...SETTINGS}>
              {selectedProject?.image.map((img) => (
                <div key={img.id}>
                  <img alt="" src={img.url} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className={cx("details")}>
          <h3>Details</h3>
          <div className={cx("information")}>
            <p>{selectedProject?.description}</p>
            <p>
              Created - <span>{selectedProject?.created}</span>
            </p>
            <p>
              Role - <span>{selectedProject?.role}</span>
            </p>
            <p>
              Frontend - <span>{selectedProject?.frontend}</span>
            </p>
            <p>
              Backend - <span>{selectedProject?.backend}</span>
            </p>
            <p>
              Demo -{" "}
              <a href={selectedProject?.demo} target="_blank" rel="noreferrer">
                <span className={cx("link")}>{selectedProject?.demo}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
