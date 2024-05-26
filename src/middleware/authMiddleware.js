import { SUBMIT_LOGIN } from '../actions/search';

// A middleware for the authentification (here to manage the communication with the server for the authentification)

const authMiddleware = (store) => (next) => (action) => {
  /* switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(
          // URL
          'http://localhost:3001/login',
          // données
          {
            email: store.getState().email,
            password: store.getState().password,
            // Note : si on veut accéder à une information de payload de l'action,
            // => truc: action.nomInfo
          }
        )
        .then((response) => {
          //il faut que je change response.data.pseudo selon comment on l'a appelé
          const actionToDispatch = handleSuccessFulLogin(response.data.pseudo);
          store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }*/

  next(action);
};

export default authMiddleware;
