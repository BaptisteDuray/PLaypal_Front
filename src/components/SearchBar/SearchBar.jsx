import './SearchBar.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Input, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router';

const SearchBar = ({ games }) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);

  const navigate = useNavigate();
  console.log(filteredGames); // voir la liste filtrée

  return (
    <div className="SectionSearch">
      <h1>Louez-les tous !</h1>
      <div className="SearchBar">
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            // TODO mettre le bon nom de la page
            navigate('/recherche-de-jeux', { filteredGames });
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
