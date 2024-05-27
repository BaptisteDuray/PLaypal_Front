import './CardGame.scss';
// image afficher par defaut si pas d'image
import defaultImage from '../../assets/icon/pawn-icon.png';

const CardGame = () => (
  <article className="card">
    <div className="game-image">
      <img src={defaultImage} alt="la boite du jeu" />
    </div>
    <h2 className="card-title">Nom du jeu</h2>
  </article>
);

export default CardGame;
