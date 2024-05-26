import { SUBMIT_LOGIN } from '../actions/search';

// A middleware for the authentification (here to manage the communication with the server for the authentification)

const authMiddleware = (store) => (next) => (action) => {
  // le middleware réagit à certains types d'actions
  /* if (action.type === SUBMIT_LOGIN) {
    // console.log('oh, une action SUBMIT_LOGIN');
    // on envoie une requête de type POST au serveur
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
        /il faut que je change response.data.pseudo selon comment on l'a appelé 
        const actionToDispatch = handleSuccessFulLogin(response.data.pseudo);
        store.dispatch(actionToDispatch);

      })
      .catch((error) => {
        console.log(error);
      });
  }*/

  next(action);
};

export default authMiddleware;
