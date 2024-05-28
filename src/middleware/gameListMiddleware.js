import axios from 'axios';

const gameListMiddleware = (store) => (next) => (action) => {
  next(action);
};

export default gameListMiddleware;
