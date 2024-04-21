import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './container/1Hero/Hero';
import About from './container/2About/About';
import { useTranslation } from 'react-i18next';
import './i18n';
import Newsletter from './container/3Newsletter/Newsletter';

function App() {
  const { t } = useTranslation();
  return (
    <div className='app__container'>
      <div className='.app__pop-up-layer'></div>
      <Navbar />
      <Routes>
        <Route
          index
          element={<Hero />}
        />
        <Route
          path='/hero'
          element={<Hero />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/newsletter'
          element={<Newsletter />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
