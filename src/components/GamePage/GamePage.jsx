// Page detail d'un jeu
// quand on clique sur la carte d'un jeu
import './GamePage.scss';
import defaultImage from '../../assets/icon/pawn-icon.png';

const Game = () => {
  return (
    <article className="card">
      <div className="game-image">
        <img src={defaultImage} alt="la boite du jeu" />
      </div>
      <h2 className="card-title">Nom du jeu</h2>
    </article>
  );
};

export default Game;
