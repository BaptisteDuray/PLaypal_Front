// import React from 'react';
// import { useSelector } from 'react-redux';
// import Game from '../GamesList/Game';
// import { Link } from 'react-router-dom';

// import './FavoritePage.scss';

// const FavoritePage = () => {
//   const favoriteGames = useSelector((state) => state.itemsFav);

//   return (
//     <div className="gamesList">
//       <h1 className="title">Mes Favoris</h1>

//       {Array.isArray(favoriteGames) && favoriteGames.length > 0 ? (
//         favoriteGames.map((game) => (
//           <Game
//             key={game.id}
//             id={game.id}
//             name={game.name}
//             description={game.description}
//             category={game.category}
//             price={game.price}
//             status={game.status}
//             image={game.image}
//           />
//         ))
//       ) : (
//         <p>Aucun jeu favori trouvé.</p>
//       )}
//     </div>
//   );
// };

// export default FavoritePage;

import React from 'react';
import { useSelector } from 'react-redux';
import Game from '../GamesList/Game';
import { Link } from 'react-router-dom';

import './FavoritePage.scss';
import RedirectionPage from '../RedirectionPage/RedirectionPage';

const FavoritePage = () => {
  const favoriteGames = useSelector((state) => state.itemsFav);
  const isLogged = useSelector((state) => state.logged);

  return (
    <>
      {isLogged ? (
        <div className="gamesList">
          <h1 className="title">Mes Favoris</h1>

          {favoriteGames.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              description={game.description}
              category={game.category}
              price={game.price}
              status={game.status}
              image={game.image}
            />
          ))}
        </div>
      ) : (
        <RedirectionPage />
      )}
    </>
  );
};

export default FavoritePage;
