import PropTypes from 'prop-types';
import './FilteredGamesList.scss';
import { useLocation } from 'react-router-dom';
import Game from '../GamesList/Game';
import backgroundImage from '../../assets/image/background-img.jpg';

const FilteredGamesList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const filteredGamesData = searchParams.get('data');
  const filteredGames = filteredGamesData
    ? JSON.parse(decodeURIComponent(filteredGamesData))
    : [];

  return (
    <div className="game-list-desktop">
      <div className="gamesList">
        <h1 className="title">Résultat de votre recherche</h1>
        {filteredGames.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            description={game.description}
            category={game.category}
            price={game.price}
            status={game.status}
            image={game.image}
          />
        ))}
      </div>
      <div className="background-img-desktop">
        <img src={backgroundImage} alt="couple qui joue à un jeu de société" />
      </div>
    </div>
  );
};

FilteredGamesList.propTypes = {
  filteredGames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
      price: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default FilteredGamesList;
