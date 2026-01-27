import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageTitle from './hooks/PageTitle'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import NotFound from './pages/NotFound/NotFound'
import Layout from './Layoyut/Layout'


function App() {
  return (
    <BrowserRouter>
      <PageTitle />

      <Routes>
        {/* RUTA PADRE */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
        </Route>

        {/* CATCH ALL */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
