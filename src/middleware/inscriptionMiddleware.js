import { SUBMIT_INSCRIPTION } from '../actions/search';

const inscriptionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_INSCRIPTION:
      axios
        .post('https://backend.baptisteduray-server.eddi.cloud/inscription')

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
