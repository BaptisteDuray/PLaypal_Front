import logo from '../../assets/logo/LOGO PLAYPAL-carré-noir.png';

import './Home.scss';
import SearchBar from '../SearchBar/SearchBar';
import CategoriesButton from '../CategoriesButton/CategoriesButton';
import CardGame from '../CardGame/CardGame';
import MenuFooter from '../MenuFooter/MenuFooter';
import { Link } from 'react-router-dom';
import { GridColumn, Grid } from 'semantic-ui-react';

const Home = () => {
  return (
    <>
      <SearchBar />

      <Link className="CardLink" to="/Catégories">
        <h2>Ton type de jeu</h2>
      </Link>

      <CategoriesButton />
      <Link className="CardLink" to="/nouveautés">
        <h2>Les Nouveautés</h2>
      </Link>
      <div className="CardGame">
        <CardGame />
        <CardGame />
      </div>

      <Link className="CardLink" to="/bonsplans">
        <h2>Bons Plans</h2>
      </Link>

      <div className="CardGame">
        <CardGame />
        <CardGame />
      </div>
    </>
  );
};

export default Home;
