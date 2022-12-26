import React from 'react'
import classNames from 'classnames/bind'
import styles from './Project.module.scss'

interface ProjectProps {
    header: string
    key: number
    image?: string
    onClick?: () => void
}

const Project = ({ key, image, header, onClick }: ProjectProps) => {
    const cx = classNames.bind(styles)

    return (
        <div
            key={key}
            onClick={onClick}
            className={cx('wrapper', 'col', 'l-4', 'm-6', 'c-12')}
        >
            <div className={cx('image')}>
                <img alt="" src={image} />
            </div>
            <h3>{header}</h3>
        </div>
    )
}

export default Project
