import React from 'react';
import { useSelector } from 'react-redux';
import Game from '../GamesList/Game';

import './FavoritePage.scss';

const FavoritePage = () => {
  // Supposons que vous avez une slice de l'état Redux nommée `favorites` qui contient les jeux favoris de l'utilisateur
  const favoriteGames = useSelector((state) => state.itemsFav);

  return (
    <div className="gamesList">
      <h1 className="title">Mes Favoris</h1>

      {favoriteGames.map((game) => (
        <Game
          key={game.id}
          name={game.name}
          description={game.description}
          category={game.category}
          price={game.price}
          status={game.status}
          image={game.image}
        />
      ))}
    </div>
  );
};
export default FavoritePage;
