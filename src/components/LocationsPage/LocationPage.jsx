import React from 'react';
import { useSelector } from 'react-redux';
import Game from '../GamesList/Game';
import { Link } from 'react-router-dom';
import RedirectionPage from '../RedirectionPage/RedirectionPage';

import './LocationPage.scss';

const LocationPage = () => {
  const itemsLoc = useSelector((state) => state.itemsLoc);
  const isLogged = useSelector((state) => state.logged);
  console.log(typeof itemsLoc);
  return (
    <>
      {isLogged ? (
        <div className="gamesList">
          <h1 className="title">Mes Locations</h1>

          {itemsLoc.map((location) => (
            <div key={location.id}>
              <p>
                Date de début:{' '}
                {new Date(location.date_debut).toLocaleDateString()}
              </p>
              <p>
                Date de fin: {new Date(location.date_fin).toLocaleDateString()}
              </p>

              <div className="rented-games">
                {location.contentRents.map((rentedGame) => (
                  <Game
                    key={rentedGame.game.Name}
                    id={rentedGame.game.id}
                    name={rentedGame.game.Name}
                    description={rentedGame.game.Description}
                    category={rentedGame.game.category}
                    price={rentedGame.game.Price}
                    status={location.Status}
                    image={rentedGame.game.image}
                    // date_debut={location.date_debut}
                    // date_fin={location.date_fin}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <RedirectionPage />
      )}
    </>
  );
};

export default LocationPage;
