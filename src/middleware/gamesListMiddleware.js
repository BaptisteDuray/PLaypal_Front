import axios from 'axios';

import {
  FETCH_FAVORITE_GAMES,
  FETCH_GAMES,
  saveGames,
  saveFavoriteGames,
  ADD_ITEM_TO_FAV,
  addItemToFav,
} from '../actions/search';

const gamesListMiddleware = (store) => (next) => (action) => {
  console.log(action);
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
          console.log('fetch favorite games', response.data);
          store.dispatch(saveFavoriteGames(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case ADD_ITEM_TO_FAV:
      axios
        .post(
          'https://backend.baptisteduray-server.eddi.cloud/api/favoris/add',

          {
            id: action.payload.id,
            name: action.payload.name,
          }
        )

        .then((response) => {
          console.log(response);
          store.dispatch(addItemToFav());
          store.dispatch(saveFavoriteGames(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    default:
      break;
  }
  next(action);
};

export default gamesListMiddleware;
