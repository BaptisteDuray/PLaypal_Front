import {} from '../actions/search';

const contactMiddleware = (store) => (next) => (action) => {
  /* case SUBMIT_CONTACT:
    console.log('oh, une action SUBMIT_SEARCH');
 
  /* le middleware réagit à certains types d'actions
  if (action.type === SUBMIT_CONTACT) {
    console.log('oh, une action SUBMIT_LOGIN');
    // on envoie une requête de type POST au serveur
    axios
      .get(
        // URL
        //'http://localhost:3001/login',
        // données
        {
         // email: store.getState().email,
          // password: store.getState().password,
          // Note : si on veut accéder à une information de payload de l'action,
          // => truc: action.nomInfo
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

      break;
      default:
  }
  */
  next(action);
};

export default contactMiddleware;
