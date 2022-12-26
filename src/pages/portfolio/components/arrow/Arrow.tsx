import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './Arrow.module.scss'

interface ArrowProps {
    onClick?: () => void
}

const NextArrow = ({ onClick }: ArrowProps) => {
    const cx = classNames.bind(styles)
    return (
        <div className={cx('next')} onClick={onClick}>
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </div>
    )
}

const PrevArrow = ({ onClick }: ArrowProps) => {
    const cx = classNames.bind(styles)
    return (
        <div className={cx('prev')} onClick={onClick}>
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </div>
        </div>
    )
}

export { NextArrow, PrevArrow }
