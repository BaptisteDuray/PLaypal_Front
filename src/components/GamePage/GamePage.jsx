import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './GamePage.scss';
import defaultImage from '../../assets/image/126163.jpg';
import iconFav from '../../assets/icon/fav2.png';
import {
  addItemToFav,
  addItemToLoc,
  deleteFromFav,
} from '../../actions/search';

const Game = () => {
  const gameData = useSelector((state) => state.selectedGame);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.itemsFav || []);
  const memoizedFavorites = useMemo(() => favorites, [favorites]);

  const handleFav = (event) => {
    event.preventDefault();
    if (
      gameData &&
      memoizedFavorites.some(
        (favGame) => favGame.gameData && favGame.gameData.id === gameData.id
      )
    ) {
      dispatch(deleteFromFav(gameData));
    } else if (gameData) {
      dispatch(addItemToFav(gameData));
    }
  };

  const tonCalculDeDate = () => {
    const currentDate = new Date();
    const endDate = new Date(currentDate.setDate(currentDate.getDate() + 7));
    return endDate;
  };

  return (
    <article className="cardgame-page">
      <div className="article-desktop-left">
        <h3>{gameData.name || 'Nom du jeu non défini'}</h3>
        <div className="available-tag">{gameData.status}</div>

        <div className="game-image">
          <img src={defaultImage} alt="la boite du jeu" />
        </div>
      </div>

      <div className="article-desktop-right">
        <div className="informations">
          <p>{gameData.description}</p>
          <p className="tags-games-list">
            {gameData.category && gameData.category.name
              ? gameData.category.name
              : 'Catégorie non définie'}
          </p>
        </div>

        <div className="reservation">
          <label htmlFor="reservation">Je loue </label>
          <select name="reservation" id="reservation">
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
            onClick={handleFav}
            // onClick={(event) => {
            //   event.preventDefault();
            //   console.log('submit');
            //   /* on envoie une action, qui déclenchera une requete en passant par
            // authMiddleware (ne pas tenir compte de ce que j'ai ecrit)*/
            //   dispatch(deleteFromFav(gameData));
            //   console.log('BANANE', deleteFromFav(gameData));
            // }}
          >
            <img src={iconFav} alt="ajouter à mes favoris" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Game;
