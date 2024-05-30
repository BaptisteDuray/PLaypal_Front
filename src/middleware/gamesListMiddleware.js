import axios from 'axios';

import { FETCH_GAMES, saveGames } from '../actions/search';

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

    default:
      break;
  }
  next(action);
};

export default gamesListMiddleware;
