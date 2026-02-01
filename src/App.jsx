import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";

import './App.css';
import PageTitle from './hooks/PageTitle';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import NotFound from './pages/NotFound/NotFound';
import Layout from './layout/Layout';
import Loading from './components/Loading/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 400);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {/* LOADER */}
      <Loading hide={!loading} />

      {/* CONTENIDO */}
      {!loading && (
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
      )}
    </>
  );
}

export default App;
