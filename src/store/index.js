import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import reducer from '../reducers/reducer';
import authMiddleware from '../middleware/authMiddleware';
import searchMiddleware from '../middleware/searchMiddleware';
import gamesListMiddleware from '../middleware/gamesListMiddleware';
import contactMiddleware from '../middleware/contactMiddleware';
import inscriptionMiddleware from '../middleware/inscriptionMiddleware';

// Enhancer pour les middlewares, appeler applyMiddleware avec les différents middlewares en argument
const enhancerWithMiddleware = applyMiddleware(
  thunk, //pour les actions asynchrones
  contactMiddleware,
  gamesListMiddleware,
  authMiddleware,
  searchMiddleware,
  inscriptionMiddleware
);

// Associer les différents enhancers avec les dev tools: composeWithDevTools est ici pour ajouter les devtools à l'enhancer qui est utilisé en argument, afin que nous puissions obtenir un nouvel enhancer
const superEnhancer = composeWithDevTools(enhancerWithMiddleware);

const store = createStore(
  // le reducer
  reducer,
  // le enhancer
  superEnhancer
);

export default store;
