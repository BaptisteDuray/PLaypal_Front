import './SearchBar.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Input, Form, FormField, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router';
import {
  changeInputMessage,
  submitSearch,
  fetchGames,
} from '../../actions/search';

const SearchBar = ({ games }) => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const [filteredGames, setFilteredGames] = useState([]);

  const navigate = useNavigate();

  return (
    <div className="SectionSearch">
      <h1>Louez-les tous !</h1>
      <div className="SearchBar">
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            // TODO mettre le bon nom de la page
            navigate('/nomDeLaPage', { filteredGames });
          }}
        >
          <Input
            icon="search"
            iconPosition="right"
            placeholder="Rechercher un jeu"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
              const filteredGame = games.filter((game) =>
                game.Name.toLowerCase().includes(
                  event.target.value.toLowerCase()
                )
              );
              setFilteredGames(filteredGame);
            }}
          />
        </Form>
      </div>
      {/* TEST ( a mettre sur une autre page list) Afficher la liste filtrée de jeux */}
      <ul>
        {filteredGames.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

SearchBar.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchBar;
