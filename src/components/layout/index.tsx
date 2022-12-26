import {
    faBriefcase,
    faHome,
    faLightbulb,
    faMailBulk,
    faMoon,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../context/themeContext'
import Button from '../button/Button'
import Menu from '../menu/Menu'
import styles from './Layout.module.scss'

interface LayoutProps {
    children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
    const cx = classNames.bind(styles)
    const { theme, setTheme } = useContext(ThemeContext)
    const [pathString, setPathString] = useState('')
    const [autoActive, setAutoActive] = useState(true)
    const location = useLocation()

    const handleSetTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        if (location) {
            setPathString(location.pathname.split('/')[1])
        }
        setAutoActive(location.pathname.split('/')[1] === '')
    }, [location])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('theme')}>
                {theme === 'dark' ? (
                    <Button
                        onClick={handleSetTheme}
                        icon={faLightbulb}
                        label=""
                        defaultBtn
                    />
                ) : (
                    <Button
                        onClick={handleSetTheme}
                        icon={faMoon}
                        label=""
                        defaultBtn
                    />
                )}
            </div>
            <div className={cx('menu')}>
                <Link to="/">
                    <Menu
                        active={autoActive}
                        pathString={pathString}
                        className={cx('btn')}
                        label="Home"
                        icon={faHome}
                    />
                </Link>
                <Link to="/portfolio">
                    <Menu
                        pathString={pathString}
                        className={cx('btn')}
                        label="portfolio"
                        icon={faBriefcase}
                    />
                </Link>
                <Link to="/about">
                    <Menu
                        pathString={pathString}
                        className={cx('btn')}
                        label="about"
                        icon={faUser}
                    />
                </Link>
                <Link to="/contact">
                    <Menu
                        pathString={pathString}
                        className={cx('btn')}
                        label="contact"
                        icon={faMailBulk}
                    />
                </Link>
            </div>
            {children}
        </div>
    )
}

export default Layout
