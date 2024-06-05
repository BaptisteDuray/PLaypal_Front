import './SearchBar.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Input, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ games }) => {
  const [searchValue, setSearchValue] = useState(''); // stocker la valeur de recherche
  const [filteredGames, setFilteredGames] = useState([]); // stocker les jeu filtrées

  const navigate = useNavigate(); // hook pour naviguer entre les pages
  // on gére la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredGamesData = filteredGames.map((game) => ({
      id: game.id,
      name: game.Name,
      description: game.Description,
      category: game.category,
      price: game.Price,
      status: game.Status,
      image: game.image,
    }));
    // navigation du resultat du filtre vers une autre page grâce à l'url
    navigate(
      `/recherche-de-jeux?data=${encodeURIComponent(
        JSON.stringify(filteredGamesData)
      )}`
    );
  };

  // RENDU
  return (
    <div className="SectionSearch">
      <h1>Louez-les tous !</h1>
      <div className="SearchBar">
        <Form onSubmit={handleSubmit}>
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
    </div>
  );
};

SearchBar.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      category: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
      Price: PropTypes.string.isRequired,
      Status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchBar;
