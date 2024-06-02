import 'semantic-ui-css/semantic.min.css';
import { Route, Routes } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './App.scss';

import Home from '../Home/Home';
import GamesList from '../GamesList/GamesList';
import GamePage from '../GamePage/GamePage';
import ContactPage from '../Contact/ContactPage';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import MenuFooter from '../MenuFooter/MenuFooter';
import NavigationMobile from '../NavigationMobile/NavigationMobile';
import Settings from '../Settings/Settings';
import InscriptionPage from '../../InscsriptionPage/InscriptionPage';
import Apropos from '../Apropos/Apropos';
import Loading from './Loading/Loading';
import { fetchGames } from '../../actions/search';

function App() {
  const dispatch = useDispatch();
  const gamesList = useSelector((state) => state.list);
  const isGamesLoaded = useSelector((state) => state.isGamesLoaded);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  if (!isGamesLoaded) {
    return <Loading />;
  }
  return (
    <div className="App">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/liste-de-jeux" element={<GamesList />} />
        <Route path="/:slug" element={<GamePage />} />
        <Route path="/Connexion" element={<Settings />} />
        <Route path="/Inscription" element={<InscriptionPage />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
      <NavigationMobile />
      <MenuFooter />
    </div>
  );
}

export default App;
