import './Game.scss';
import { Link } from 'react-router-dom';
import iconFav from '../../assets/icon/fav2.png';
// image afficher par defaut si pas d'image
import defaultImage from '../../assets/icon/pawn-icon.png';
import { addItemToFav } from '../../actions/search';
import { useSelector, useDispatch } from 'react-redux';

const GamesList = () => {
  const itemsFavValue = useSelector((state) => state.itemsFav);

  const dispatch = useDispatch();
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
        <button
          className="btn-back-fav"
          type="button"
          onClick={(event) => {
            event.preventDefault();
            console.log('submit');
            /* on envoie une action, qui déclenchera une requete en passant par
authMiddleware */
            dispatch(addItemToFav());
          }}
        >
          <img src={iconFav} alt="ajouter à mes favoris" />
        </button>
      </div>
    </div>
  );
};

export default GamesList;
