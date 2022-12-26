import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

interface SkillProps {
    key: number
    name: string
    image: string
}

const Skill = ({ key, name, image }: SkillProps) => {
    const cx = classNames.bind(styles)
    return (
        <div key={key} className={cx('wrapper')}>
            <div className={cx('image')}>
                <img alt="" src={image} />
            </div>
            <h1>{name}</h1>
        </div>
    )
}

export default Skill
