import { SUBMIT_CONTACT } from '../actions/search';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CONTACT:
      axios
        .post('https://backend.baptisteduray-server.eddi.cloud/api/contact')
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
};

export default contactMiddleware;
