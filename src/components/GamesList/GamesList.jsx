// page de liste des jeux
// peux s'adapter en fonction de la recherche
import './GamesList.scss';
import Game from './Game';

const GamesList = () => {
  return (
    <div className="gamesList">
      <h1 className="title">Tous nos jeux</h1>
      <Game />
      <Game />
      <Game />
      <Game />
    </div>
  );
};

export default GamesList;
