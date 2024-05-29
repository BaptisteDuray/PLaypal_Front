import './Game.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import iconFav from '../../assets/icon/fav2.png';
// image afficher par defaut si pas d'image
import defaultImage from '../../assets/icon/pawn-icon.png';
import { addItemToFav } from '../../actions/search';
// TODO importer proptypes

const Game = () => {
  const itemsFavValue = useSelector((state) => state.itemsFav);

  const dispatch = useDispatch();

  // test pour la dynamisation de game
  const name = 'nom du jeu';
  const price = 'à partir de 10 €';
  const category = 'Narratif';
  const status = '●Disponible';
  // TODO 3. dynamiser les info grace au donnéed de gamesData

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
        <h3>{name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint
          tempora, vero eveniet reprehenderit, hic ea voluptates iure
        </p>
        <p className="tags-games-list">{category}</p>
        <strong className="price-games-list">{price}</strong>
      </div>

      <div className="favorite">
        <div className="available-tag">{status}</div>
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

// TODO verification des proptypes
export default Game;
