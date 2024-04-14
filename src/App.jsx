import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
/* import Hero from './container/1Hero/Hero'; */
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t } = useTranslation();
  return (
    <div className='app__container'>
      <Navbar />
      {/* <Routes>
        <Route
          index
          element={<Hero />}
        />
        <Route
          path='/hero'
          element={<Hero />}
        />
      </Routes> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
