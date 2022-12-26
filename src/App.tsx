import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </Layout>
    )
}

export default App
