import axios from 'axios';

import {
  FETCH_RENT_GAMES,
  FETCH_FAVORITE_GAMES,
  FETCH_GAMES,
  fetchRentGames,
  saveGames,
  saveFavoriteGames,
  saveRentGames,
  ADD_ITEM_TO_FAV,
  addItemToFav,
  addItemToLoc,
  ADD_ITEM_TO_LOC,
  fetchFavoriteGames,
  DELETE_FROM_FAV,
} from '../actions/search';

const gamesListMiddleware = (store) => (next) => (action) => {
  // console.log(action);
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
      console.log(action);
      axios
        .post(
          'https://backend.baptisteduray-server.eddi.cloud/api/favoris/add',

          { game: action.payload.id },
          {
            headers: {
              Authorization: `Bearer ${store.getState().token}`,
            },
          }
        )

        .then((response) => {
          console.log(response);

          store.dispatch(fetchFavoriteGames(response.data));
        })
        .catch((error) => {
          throw error;
        });

      break;
    case 'DELETE_FROM_FAV':
      const { id } = action.payload;
      axios
        .delete(
          `https://backend.baptisteduray-server.eddi.cloud/api/favoris/${id}`,
          {
            headers: {
              Authorization: `Bearer ${store.getState().token}`,
            },
          }
        )
        .then((response) => {
          console.log('Élément supprimé des favoris', response.data);
          store.dispatch(fetchFavoriteGames(response.data));
        })
        .catch((error) => {
          console.error('Erreur lors de la suppression des favoris', error);
        });
      break;

    case FETCH_RENT_GAMES:
      axios
        .get(
          'https://backend.baptisteduray-server.eddi.cloud/api/louer',

          {
            headers: {
              Authorization: `Bearer ${store.getState().token}`,
            },
          }
        )
        .then((response) => {
          console.log('FETCH RENT GAMES', response.data);
          store.dispatch(saveRentGames(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case ADD_ITEM_TO_LOC:
      console.log('RACLETTE', action);
      axios
        .post(
          'https://backend.baptisteduray-server.eddi.cloud/api/louer/add',

          {
            date_debut: action.payload.date_debut,
            date_fin: action.payload.date_fin,
            contentRents: [
              {
                game: action.payload.gameData.id,
              },
            ],
          },

          {
            headers: {
              Authorization: `Bearer ${store.getState().token}`,
            },
          }
        )

        .then((response) => {
          console.log('TOTO', response.data);
          // store.dispatch(addItemToLoc());
          console.log();
          store.dispatch(fetchRentGames(response.data));
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
