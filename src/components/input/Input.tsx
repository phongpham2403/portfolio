import React, { ChangeEvent } from 'react'
import classNames from 'classnames/bind'
import styles from './Input.module.scss'

interface InputProps {
    name: string
    value: string
    type: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
    type = 'text',
    name,
    value,
    placeholder,
    onChange,
}: InputProps) => {
    const cx = classNames.bind(styles)
    return (
        <div className={cx('wrapper')}>
            {type === 'textarea' ? (
                <textarea placeholder={placeholder} />
            ) : (
                <input
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    type="text"
                    onChange={onChange}
                />
            )}
        </div>
    )
}

export default Input
