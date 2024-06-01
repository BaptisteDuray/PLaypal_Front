import axios from 'axios';

import { SUBMIT_LOGIN, HANDLE_SUCCESSFUL_LOGIN } from '../actions/search';
//HANDLE_SUCCESSFUL_LOGIN
// A middleware for the authentification (here to manage the communication with the server for the authentification)

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(
          // URL
          'https://backend.baptisteduray-server.eddi.cloud/api/login_check',
          // données https://backend.baptisteduray-server.eddi.cloud/
          {
            username: store.getState().email, //remplacer username par email si ça ne marche pas
            password: store.getState().password,
            // Note : si on veut accéder à une information de payload de l'action,
            // => truc: action.nomInfo
          }
        )
        .then((response) => {
          //console.log(response);
          //console.log(response.data.token);

          store.dispatch(handleSuccessfulLogin(response.data.token));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }

  next(action);
};

export default authMiddleware;
