import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/reducer';
import authMiddleware from '../middleware/authMiddleware';
import searchMiddleware from '../middleware/searchMiddleware';
import gamesListMiddleware from '../middleware/gamesListMiddleware';
import contactMiddleware from '../middleware/contactMiddleware';
import inscriptionMiddleware from '../middleware/inscriptionMiddleware';

//enhancer for the middlewares, cll applyMiddleware with the different middleware in argument
const enhancerWithMiddleware = applyMiddleware(
  gamesListMiddleware,
  authMiddleware,
  searchMiddleware
  //contactMiddleware,
  //inscriptionMiddleware
);

//We associate the different with dev tools: composeWithDevTools is here to add the devtools to the enhancer that is used in argument, so we can get a new enhancer

const superEnhancer = composeWithDevTools(enhancerWithMiddleware);

const store = createStore(
  // le reducer
  reducer,
  // le enhancer
  superEnhancer
);

export default store;
