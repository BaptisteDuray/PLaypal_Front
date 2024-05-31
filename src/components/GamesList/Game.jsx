import './Game.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import iconFav from '../../assets/icon/fav2.png';
// image afficher par defaut si pas d'image
import defaultImage from '../../assets/icon/pawn-icon.png';
import { addItemToFav } from '../../actions/search';

const Game = ({ name, description, category, price, status, image }) => {
  const itemsFavValue = useSelector((state) => state.itemsFav);

  const dispatch = useDispatch();

  // test pour la dynamisation de game

  // TODO 3. dynamiser les info grace au donnée de gamesData

  return (
    <div className="cardList">
      <div className="game-image">
        <img src={image} alt="la boite du jeu" />

        <Link className="CardGameLink" to="/nom-du-jeu">
          <button className="btn-view-game" type="button">
            voir le jeu
          </button>
        </Link>
      </div>

      <div className="informations">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="tags-games-list">{category.name}</p>
        <strong className="price-games-list">à partir de {price}</strong>
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

Game.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Game;
