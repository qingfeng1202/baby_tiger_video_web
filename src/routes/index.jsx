import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Admin from '../pages/Admin'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'


export const RootRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/404" element={<PageNotFound />} />
            </Routes>
        </Router>
    )
}