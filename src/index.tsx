import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'aos/dist/aos.css'
import GlobalStyles from './components/global-styles'
import ThemeProvider from './context/themeContext'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)

reportWebVitals()
