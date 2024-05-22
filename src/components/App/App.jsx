import 'semantic-ui-css/semantic.min.css';
import { Route, Routes } from 'react-router';

import './App.scss';

import './App.scss';
import Home from '../Home/Home';
import ContactPage from '../Contact/ContactPage';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import MenuFooter from '../MenuFooter/MenuFooter';
import NavigationMobile from '../NavigationMobile/NavigationMobile';

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
      <NavigationMobile />
    </div>
  );
}

export default App;
