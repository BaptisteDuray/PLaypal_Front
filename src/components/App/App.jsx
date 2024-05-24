import 'semantic-ui-css/semantic.min.css';
import { Route, Routes } from 'react-router';

import './App.scss';

import Home from '../Home/Home';
import GamesList from '../GamesList/GamesList';
import GamePage from '../GamePage/GamePage';
import ContactPage from '../Contact/ContactPage';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import MenuFooter from '../MenuFooter/MenuFooter';
import NavigationMobile from '../NavigationMobile/NavigationMobile';
import Settings from '../Settings/Settings';

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/liste-de-jeux" element={<GamesList />} />
        <Route path="/nom-du-jeu" element={<GamePage />} />
        <Route path="/Connexion" element={<Settings />} />
      </Routes>
      <NavigationMobile />
    </div>
  );
}

export default App;
