import axios from 'axios';

import {
  FETCH_FAVORITE_GAMES,
  FETCH_GAMES,
  saveGames,
  saveFavoriteGames,
} from '../actions/search';

const gamesListMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES:
      axios
        .get('https://backend.baptisteduray-server.eddi.cloud/api/jeu')
        .then((response) => {
          console.log(response);
          store.dispatch(saveGames(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case FETCH_FAVORITE_GAMES:
      axios
        .get(
          'https://backend.baptisteduray-server.eddi.cloud/api/favoris/',

          {
            headers: {
              Authorization: `Bearer ${store.getState().token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          store.dispatch(saveFavoriteGames(response.data.content_favorite));
        })
        .catch((error) => {
          console.log(error);
        });
    default:
      break;
  }
  next(action);
};

export default gamesListMiddleware;
