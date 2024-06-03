import axios from 'axios';
import { SUBMIT_CONTACT } from '../actions/search';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CONTACT:
      axios
        .post('https://backend.baptisteduray-server.eddi.cloud/api/contact/', {
          Firstname: store.getState().firstname,

          Name: store.getState().name,
          Company: store.getState().company,
          mail: store.getState().emailContact,
          contact_number: store.getState().contactNumber,
          message: store.getState().message,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
      next(action);
  }
};

export default contactMiddleware;
