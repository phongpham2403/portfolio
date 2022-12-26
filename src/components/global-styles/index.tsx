import React, { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'
import './GlobalStyles.scss'

interface GlobalStylesProps {
    children: JSX.Element
}

const GlobalStyles = ({ children }: GlobalStylesProps) => {
    const { theme } = useContext(ThemeContext)

    return <div className={theme}>{children}</div>
}

export default GlobalStyles
