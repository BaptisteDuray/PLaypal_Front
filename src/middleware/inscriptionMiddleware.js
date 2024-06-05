import axios from 'axios';
import { SUBMIT_INSCRIPTION } from '../actions/search';

const inscriptionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_INSCRIPTION:
      axios
        .post(
          'https://backend.baptisteduray-server.eddi.cloud/api/register/',

          {
            Firstname: store.getState().firstnameInscription,
            Lastname: store.getState().nameInscription,
            email: store.getState().emailInscription,
            password: store.getState().passwordInscription,
            icon: store.getState().icon,
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
      break;
  }
  next(action);
};

export default inscriptionMiddleware;
