import axios from 'axios';
import { SUBMIT_CONTACT } from '../actions/search';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CONTACT:
      axios
        .post(
          'https://backend.baptisteduray-server.eddi.cloud/api/contact/',
          {
            Firstname: store.getState().firstname,
            Name: store.getState().name,
            Company: store.getState().company,
            mail: store.getState().emailContact,
            contactNumber: store.getState().contactNumber,
            message: store.getState().message,
          },
          {
            // headers: {
            //   'Authorization': `Bearer ${MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1C593IRTwNUK3tT6U86Wy6cvlZYDpOr/r51jxQF0aD49eA2fLAiy8Spz0XUhLKruRlj/5U+upb0nNyxvILFC9+s7hrrSq4vrno0t326uKgE8THTqb4FdK2os85yPt37lw1tJ0Zu2kSVsYpfPAttCvqdD85+BDHfyp7YdLPNMMsEJnz9r4Xt60QZJY0eZ3MYM20vOAKtKWKzf6pOH37G198JE600ZRJHg155uPwNcnwYalo9dy6kOYonqz2jXL71isKz44QL0lnrono5IbVTQN6b3GGup3zCH3FIXt6yDg+7OTHqirr9tLqUXI3ll/1st+E7lyIneEpXA5TKdCg7JCwIDAQAB}`
            // }
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
      next(action);
  }
};

export default contactMiddleware;
