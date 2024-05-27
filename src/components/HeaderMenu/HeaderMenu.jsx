import { Link } from 'react-router-dom';
import logo from '../../assets/logo/LOGO PLAYPAL-carré-noir.png';

import HeaderButton from '../HeaderButton/HeaderButton';

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
