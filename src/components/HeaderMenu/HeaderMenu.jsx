import logo from '../../assets/logo/LOGO PLAYPAL-carré-noir.png';
import './HeaderMenu.scss';

import HeaderButton from '../HeaderButton/HeaderButton';

import { Link } from 'react-router-dom';
import { GridColumn, Grid } from 'semantic-ui-react';

import './HeaderMenu.scss';

const HeaderMenu = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} className="App-logo" alt="Playpal" />
      </Link>
      <HeaderButton />
    </header>
  );
};

export default HeaderMenu;
