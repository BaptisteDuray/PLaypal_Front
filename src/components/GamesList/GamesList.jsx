import PropTypes from 'prop-types';
import './GamesList.scss';
import Game from './Game';
import backgroundImage from '../../assets/image/background-img.jpg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../actions/search';
import { addItemToFav, addItemToLoc } from '../../actions/search';

const GamesList = () => {
  const dispatch = useDispatch();
  const gamesList = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);
  console.log(gamesList);
  return (
    <div className="game-list-desktop">
      <div className="gamesList">
        <h1 className="title">Tous nos jeux</h1>
        {gamesList.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.Name}
            description={game.Description}
            category={game.category}
            price={game.Price}
            status={game.Status}
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
  gamesList: PropTypes.arrayOf(
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
  ),
};

export default GamesList;
