import './Game.scss';
import { Link } from 'react-router-dom';
import iconFav from '../../assets/icon/fav2.png';
// image afficher par defaut si pas d'image
import defaultImage from '../../assets/icon/pawn-icon.png';

const GamesList = () => {
  return (
    <div className="cardList">
      <div className="game-image">
        <img src={defaultImage} alt="la boite du jeu" />

        <Link className="CardGameLink" to="/nom-du-jeu">
          <button className="btn-view-game" type="button">
            voir le jeu
          </button>
        </Link>
      </div>

      <div className="informations">
        <h3>Nom du jeu</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint
          tempora, vero eveniet reprehenderit, hic ea voluptates iure
        </p>
        <p className="tags-games-list">les tags</p>
        <strong className="price-games-list">à partir de 10€</strong>
      </div>

      <div className="favorite">
        <div className="available-tag"> ●Disponible</div>
        <img src={iconFav} alt="ajouter à mes favoris" />
      </div>
    </div>
  );
};

export default GamesList;
