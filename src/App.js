import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Perfil from './components/Perfil';
import i18n from './components/i18n';


const LanguageSwitcher = () => {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <LanguageSwitcher /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
