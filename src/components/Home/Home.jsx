import './Home.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import CategoriesButton from '../CategoriesButton/CategoriesButton';
import CardGame from '../CardGame/CardGame';
import MenuFooter from '../MenuFooter/MenuFooter';
import { fetchGames } from '../../actions/search';
import { useEffect, useState } from 'react';

const Home = () => {
  // on recupere liste jeu de l'api
  const games = useSelector((state) => state.list);

  return (
    <>
      <SearchBar games={games} />

      <Link className="CardLink" to="/Catégories">
        <h2>Ton type de jeu</h2>
      </Link>

      <CategoriesButton />
      <Link className="CardLink" to="/nouveautés">
        <h2>Les Nouveautés</h2>
      </Link>
      <div className="CardGame">
        <Link className="CardGameLink" to="/nom-du-jeu">
          <CardGame />
        </Link>

        <Link className="CardGameLink" to="/nom-du-jeu">
          <CardGame />
        </Link>
      </div>

      <Link className="CardLink" to="/bonsplans">
        <h2>Bons Plans</h2>
      </Link>

      <div className="CardGame">
        <Link className="CardGameLink" to="/nom-du-jeu">
          <CardGame />
        </Link>
        <Link className="CardGameLink" to="/nom-du-jeu">
          <CardGame />
        </Link>
      </div>
    </>
  );
};

export default Home;
