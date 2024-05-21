import 'semantic-ui-css/semantic.min.css';

import './App.scss';

import logo from '../../assets/logo/LOGO PLAYPAL-carré-noir.png';

import './App.scss';
import HeaderButton from '../HeaderButton/HeaderButton';
import SearchBar from '../SearchBar/SearchBar';
import CategoriesButton from '../CategoriesButton/CategoriesButton';
import CardGame from '../CardGame/CardGame';
import MenuFooter from '../MenuFooter/MenuFooter';
import { GridColumn, Grid } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <header>
        <Grid columns={2} padded>
          <GridColumn>
            <img src={logo} className="App-logo" alt="logo" />
          </GridColumn>
          <GridColumn>
            <HeaderButton />
          </GridColumn>
        </Grid>
      </header>

      <SearchBar />

      <h2>Ton type de jeu!</h2>

      <CategoriesButton />

      <h2>Les Nouveautés</h2>

      <CardGame />

      <h2>Bons Plans</h2>

      <CardGame />
      <footer className="footer">
        <MenuFooter />
      </footer>
    </div>
  );
}

export default App;
