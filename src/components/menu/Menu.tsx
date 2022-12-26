import React from 'react'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface MenuProps {
    icon?: IconDefinition | IconProp
    label: string
    className?: any
    pathString: string
    active?: boolean
    onClick?: () => void
}
const Menu = ({
    label,
    icon,
    className,
    pathString,
    active,
    onClick,
}: MenuProps) => {
    const cx = classNames.bind(styles)
    const classes = cx('wrapper', {
        [className]: className,
    })

    return (
        <span onClick={onClick} className={classes}>
            <span
                className={cx('icon', {
                    active: active ? active : pathString === label,
                })}
            >
                <FontAwesomeIcon className={cx('arrow')} icon={icon} />
            </span>
            <span className={cx('label')}>{label}</span>
        </span>
    )
}

export default Menu
