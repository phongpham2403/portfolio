import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface AchievementProps {
    quantity: string
    topWord: string
    bottomWord: string
}

const Achievement = ({ quantity, topWord, bottomWord }: AchievementProps) => {
    const cx = classNames.bind(styles)
    return (
        <div className={cx('wrapper')}>
            <div className={cx('quantity')}>
                <h1>{quantity}</h1>
                <span>
                    <FontAwesomeIcon icon={faPlus} />
                </span>
            </div>
            <div className={cx('name')}>
                <span>{topWord}</span>
                <span>{bottomWord}</span>
            </div>
        </div>
    )
}

export default Achievement
