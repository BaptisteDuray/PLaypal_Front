import React from 'react';
import { useSelector } from 'react-redux';
import Game from '../GamesList/Game';
import { Link } from 'react-router-dom';

import './LocationPage.scss';

const LocationPage = () => {
  const rentGames = useSelector((state) => state.itemsLoc);

  return (
    <div className="gamesList">
      <h1 className="title">Mes Locations</h1>

      {rentGames.map((game) => (
        <Game
          key={game.id}
          id={game.id}
          name={game.name}
          description={game.description}
          category={game.name}
          price={game.price}
          status={game.status}
          image={game.image}
        />
      ))}
    </div>
  );
};

export default LocationPage;
