// page de liste des jeux
// peux s'adapter en fonction de la recherche
import PropTypes from 'prop-types';
import './GamesList.scss';
import Game from './Game';
import backgroundImage from '../../assets/image/background-img.jpg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// TODO 2.mettre les data en props
const GamesList = ({ gamesData }) => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  return (
    <div className="game-list-desktop">
      <div className="gamesList">
        <h1 className="title">Tous nos jeux</h1>

        {gamesData.map((game) => (
          <Game
            key={game.id}
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

GamesList.propTypes = {
  gamesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GamesList;
