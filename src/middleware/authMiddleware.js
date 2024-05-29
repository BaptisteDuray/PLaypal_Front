import axios from 'axios';

import {
  SUBMIT_LOGIN,
  HANDLE_SUCCESSFUL_LOGIN,
  handleSuccessLogin,
} from '../actions/search';
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
          console.log(response);
          //il faut que je change response.data.pseudo selon comment on l'a appelé
          //const actionToDispatch = handleSuccessFulLogin(
          // response.user.firstname
          //);
          //console.log('Response from server:', response.data);
          //const actionToDispatch = {
          //type: HANDLE_SUCCESSFUL_LOGIN,
          //payload: response.data,
          // };

          //store.dispatch(
          //handleSuccessfulLogin(
          //  response.playpal.game.firstname,
          // response.playpal.token
          // )
          //);

          // à ce stade le token est déjà rangé dans le state (le store traite
          // les actions de façon synchrone)

          // on récupère les recettes préférées de l'utilisateur
          //store.dispatch(handleSuccessLogin());
          //store.dispatch(actionToDispatch);
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
