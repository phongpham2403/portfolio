import React, { createContext, useState } from 'react'

export interface Theme {
    theme: string
    setTheme: React.Dispatch<React.SetStateAction<string>>
}
export const ThemeContext = createContext<Theme>({
    theme: '',
    setTheme: () => {},
})
interface ThemeProps {
    children: JSX.Element
}

const ThemeProvider = ({ children }: ThemeProps) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const value = { theme, setTheme }
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider
