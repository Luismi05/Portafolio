import Navbar from '../components/navbar/navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />

            <main className="d-flex aling-items-center justify-content-center main">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout