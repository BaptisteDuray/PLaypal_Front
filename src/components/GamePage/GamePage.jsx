// Page detail d'un jeu
// quand on clique sur la carte d'un jeu

import { useSelector, useDispatch } from 'react-redux';
import { findGame } from '../../Selector/games';

import './GamePage.scss';
// eslint-disable-next-line import/order
import { useParams } from 'react-router';
import defaultImage from '../../assets/icon/pawn-icon.png';
import iconFav from '../../assets/icon/fav2.png';
import { addItemToFav, addItemToLoc } from '../../actions/search';

const Game = () => {
  // TODO trouver le jeux grace a son url (on utilise des parametre)
  const { slug } = useParams();
  const gameData = useSelector((state) => findGame(state.list, slug));

  console.log('Jeu trouvé :', slug);
  console.log(gameData);

  // TODO fav et loc

  const itemsFavValue = useSelector((state) => state.itemsFav);
  const itemsLocValue = useSelector((state) => state.itemsLoc);

  const dispatch = useDispatch();
  return (
    <article className="cardgame-page">
      <div className="article-desktop-left">
        <h3>{gameData?.Name || 'Nom du jeu non défini'}</h3>
        <div className="available-tag"> ●Disponible</div>

        <div className="game-image">
          <img src={defaultImage} alt="la boite du jeu" />
        </div>
      </div>

      <div className="article-desktop-right">
        <div className="informations">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint
            tempora, vero eveniet reprehenderit, hic ea voluptates iure sed et
            commodi, vel dolore illo! Aliquam quas recusandae unde nam nemo!
            vero eveniet reprehenderit, hic ea voluptates iure sed et commodi,
            vel dolore illo! Aliquam quas recusandae unde nam nemo!
          </p>
          <p className="tags-games-list">les tags</p>
        </div>

        <div className="reservation">
          <label htmlFor="reservation">Je loue </label>
          <select name="reservation" id="reservation">
            <option value="option1">pour 72 heurs</option>
            <option value="option2">pour 1 semaine</option>
          </select>
          <strong className="price-games-list">10€</strong>
        </div>

        <div className="btn">
          <button
            className="btn-reservation"
            type="button"
            onClick={(event) => {
              event.preventDefault();
              console.log('submit');
              /* on envoie une action, qui déclenchera une requete en passant par
authMiddleware */
              dispatch(addItemToLoc());
            }}
          >
            Louer le jeu
          </button>
          <button className="btn-back" type="button">
            Retour
          </button>
        </div>

        <div className="fav-icon">
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
    </article>
  );
};

export default Game;
