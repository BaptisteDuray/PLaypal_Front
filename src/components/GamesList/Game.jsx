// const handleFav = (event) => {
//   event.preventDefault();
//   dispatch(addItemToFav);
// };

import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import iconFav from '../../assets/icon/fav2.png';
import defaultImage from '../../assets/image/126163.jpg';
import { addItemToFav, selectGame, deleteFromFav } from '../../actions/search';

const Game = ({ name, description, category, price, status, image, id }) => {
  const favorites = useSelector((state) => state.itemsFav || []);
  const dispatch = useDispatch();

  // Utilisation de useMemo pour mémoïser favorites
  const memoizedFavorites = useMemo(() => favorites, [favorites]);

  const handleFav = (event) => {
    event.preventDefault();

    if (memoizedFavorites.some((favGame) => favGame.id === id)) {
      dispatch(deleteFromFav(id));
    } else {
      dispatch(
        addItemToFav({ name, description, category, price, status, image, id })
      );
    }
  };

  return (
    <div className="cardList">
      <div className="game-image">
        <img src={defaultImage} alt="la boite du jeu" />

        <Link className="CardGameLink" to={`/liste-de-jeux/${name}`}>
          <button
            className="btn-view-game"
            type="button"
            onClick={() =>
              dispatch(
                selectGame({
                  name,
                  description,
                  category,
                  price,
                  status,
                  image,
                  id,
                  // date_debut,
                  // date_fin,
                })
              )
            }
          >
            voir le jeu
          </button>
        </Link>
      </div>

      <div className="informations">
        <h3 className="h3">{name}</h3>
        <h4 className="h4">{name}</h4>
        <p>{description}</p>
        <p className="tags-games-list">
          {category && typeof category === 'object' && category.name
            ? category.name
            : 'Catégorie non définie'}
        </p>
        <strong className="price-games-list">à partir de {price}</strong>
      </div>

      <div className="favorite">
        <div className="available-tag">{status}</div>
        <button className="btn-back-fav" type="button" onClick={handleFav}>
          <img src={iconFav} alt="ajouter à mes favoris" />
        </button>
      </div>
    </div>
  );
};

// verification des proptypes

// Game.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   category: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     // Ajoutez d'autres propriétés de l'objet category ici
//   }).isRequired,
//   price: PropTypes.string.isRequired,
//   status: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
// };

export default Game;
