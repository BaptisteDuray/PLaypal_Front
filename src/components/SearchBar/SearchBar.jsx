import './SearchBar.scss';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Input, Form, FormField, Segment } from 'semantic-ui-react';

import {
  changeInputMessage,
  submitSearch,
  fetchGames,
} from '../../actions/search';

const SearchBar = ({ games }) => {
  const searchValue = useSelector((state) => state.inputMessage);

  const dispatch = useDispatch();

  // TODO
  // Récupérer les produits depuis l'API au montage du composant
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  // Filtrer les produits en fonction du terme de recherche
  const filteredGames = games.filter((game) =>
    // tolowercase converti la string en minuscule
    game.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="SectionSearch">
      <h1>Louez-les tous !</h1>
      <div className="SearchBar">
        <Segment>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              console.log('recherche envoyée');

              dispatch(submitSearch());
            }}
          >
            <FormField>
              <Input
                icon="search"
                iconPosition="right"
                placeholder="Rechercher un jeu"
                value={searchValue}
                onChange={(event) => {
                  const action = changeInputMessage(event.target.value);
                  dispatch(action);
                }}
              />
            </FormField>
          </Form>
        </Segment>
      </div>
      {/* TEST Afficher la liste filtrée de produits */}
      <ul>
        {filteredGames.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

SearchBar.propTypes = {
  // eslint-disable-next-line react/require-default-props
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default SearchBar;
