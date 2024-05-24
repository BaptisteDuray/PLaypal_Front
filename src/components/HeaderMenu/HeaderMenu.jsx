import logo from '../../assets/logo/LOGO PLAYPAL-carré-noir.png';

import HeaderButton from '../HeaderButton/HeaderButton';

import { Link } from 'react-router-dom';
import { GridColumn, Grid } from 'semantic-ui-react';

import './HeaderMenu.scss';

const HeaderMenu = () => {
  return (
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
  );
};

export default HeaderMenu;
