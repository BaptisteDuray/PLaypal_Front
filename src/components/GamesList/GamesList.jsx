// page de liste des jeux
// peux s'adapter en fonction de la recherche
import './GamesList.scss';
import Game from './Game';
import backgroundImage from '../../assets/image/background-img.jpg';

const GamesList = () => {
  return (
    <div className="game-list-desktop">
      <div className="gamesList">
        <h1 className="title">Tous nos jeux</h1>
        <Game />
        <Game />
        <Game />
        <Game />
      </div>
      <div className="background-img-desktop">
        <img src={backgroundImage} alt="couple qui joue à un jeu de société" />
      </div>
    </div>
  );
};

export default GamesList;
