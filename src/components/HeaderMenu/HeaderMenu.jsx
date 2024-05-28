import logo from '../../assets/logo/LOGO PLAYPAL-carré-noir.png';
import './HeaderMenu.scss';

import HeaderButton from '../HeaderButton/HeaderButton';

import { Link } from 'react-router-dom';
import { GridColumn, Grid } from 'semantic-ui-react';

import './HeaderMenu.scss';

const HeaderMenu = () => {
  return (
<<<<<<< HEAD
    <header>
      <Link to="/">
        <img src={logo} className="App-logo" alt="Playpal" />
      </Link>
      <HeaderButton />
    </header>
=======
    <>
      <header className="header">
        <Grid columns={2} padded>
          <GridColumn>
            <Link to="/">
              <img src={logo} className="App-logo" alt="Playpal" />
            </Link>
          </GridColumn>
          <GridColumn>
            <HeaderButton />
          </GridColumn>
        </Grid>
      </header>
    </>
>>>>>>> brnache-dev-mb-2
  );
};

export default HeaderMenu;
