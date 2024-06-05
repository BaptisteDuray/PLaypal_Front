// Page detail d'un jeu
// quand on clique sur la carte d'un jeu

import { useSelector, useDispatch } from 'react-redux';
import { findGame } from '../../Selector/games';

import './GamePage.scss';
// eslint-disable-next-line import/order
import { useParams } from 'react-router';
import defaultImage from '../../assets/image/126163.jpg';
import iconFav from '../../assets/icon/fav2.png';
import {
  addItemToFav,
  addItemToLoc,
  deleteFromFav,
} from '../../actions/search';

const Game = () => {
  // trouver le jeux grace a son url (on utilise des parametre)
  const { slug } = useParams();
  const gameData = useSelector((state) => state.selectedGame);

  console.log('Jeu trouvé :', slug);
  console.log(gameData);

  // TODO fav et loc

  const itemsLocValue = useSelector((state) => state.itemsLoc);

  const tonCalculDeDate = () => {
    const currentDate = new Date();
    // Ajouter 7 jours à la date actuelle, par exemple
    const endDate = new Date(currentDate.setDate(currentDate.getDate() + 7));
    return endDate;
  };

  const dispatch = useDispatch();
  return (
    <article className="cardgame-page">
      <div className="article-desktop-left">
        <h3>{gameData?.name || 'Nom du jeu non défini'}</h3>
        <div className="available-tag">{gameData.status}</div>

        <div className="game-image">
          <img src={defaultImage} alt="la boite du jeu" />
        </div>
      </div>

      <div className="article-desktop-right">
        <div className="informations">
          <p>{gameData.description}</p>
          <p className="tags-games-list">
            {gameData.category?.name || 'Catégorie non définie'}
          </p>
        </div>

        <div className="reservation">
          <label htmlFor="reservation">Je loue </label>
          <select name="reservation" id="reservation">
            {/* <option value="option1">pour 72 heures</option> */}
            <option value="option2">pour 1 semaine</option>
          </select>
          <strong className="price-games-list">{gameData.price}</strong>
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
              dispatch(
                addItemToLoc({
                  date_debut: new Date(),
                  gameData,
                  date_fin: tonCalculDeDate(),
                })
              );
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
authMiddleware (ne pas tenir compte de ce que j'ai ecrit)*/
              dispatch(addItemToFav(gameData));
              console.log('BANANE', addItemToFav(gameData));
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
