import React from 'react'
import classNames from 'classnames/bind'
import styles from './PageHeader.module.scss'

interface PageHeaderProps {
    title: string
    restWord: string
    lastWord: string
}

const PageHeader = ({ title, restWord, lastWord }: PageHeaderProps) => {
    const cx = classNames.bind(styles)
    return (
        <div className={cx('wrapper')}>
            <h1>
                {restWord} <span>{lastWord}</span>
            </h1>
            <span className={cx('title')}>{title}</span>
        </div>
    )
}

export default PageHeader
