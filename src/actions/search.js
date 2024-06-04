export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';
export const CHANGE_SETTINGS_FIELD = 'CHANGE_SETTINGS_FIELD';
export const CHANGE_SETTINGS_CONTACT = 'CHANGE_SETTINGS_CONTACT';
export const CHANGE_SETTINGS_INSCRIPTION = 'CHANGE_SETTINGS_INSCRIPTION';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
export const SUBMIT_CONTACT = 'SUBMIT_CONTACT';
export const SUBMIT_INSCRIPTION = 'SUBMIT_INSCRIPTION';
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const LOGOUT = 'LOGOUT';

//ACTIONS POUR LES JEUX
export const FETCH_GAMES = 'FETCH_GAMES';
export const SAVE_GAMES = 'SAVE_GAMES';
export const SELECT_GAME = 'SELECT_GAME';
export const FETCH_FAVORITE_GAMES = 'FETCH_FAVORITE_GAMES';
export const SAVE_FAVORITE_GAMES = 'SAVE_FAVORITE_GAMES';
export const FETCH_RENT_GAMES = 'FETCH_RENT_GAMES';
export const SAVE_RENT_GAMES = 'SAVE_RENT_GAMES';

// ajout d'une action pour ajouter en favoris
export const ADD_ITEM_TO_FAV = 'ADD_ITEM_TO_FAV';
// ajout d'une action pour ajouter en location
export const ADD_ITEM_TO_LOC = 'ADD_ITEM_TO_LOC';

//

export const fetchGames = () => ({
  type: FETCH_GAMES,
});
export const saveGames = (games) => ({
  type: SAVE_GAMES,
  games,
});

export const selectGame = (game) => ({
  type: SELECT_GAME,
  game,
});

export const saveFavoriteGames = (games) => ({
  type: SAVE_FAVORITE_GAMES,
  games,
});

export const changeInputMessage = (newValue) => ({
  type: CHANGE_INPUT_MESSAGE,
  value: newValue,
});
export const changeSettingsField = (newValue, identifier) => ({
  type: CHANGE_SETTINGS_FIELD,
  value: newValue,
  identifier: identifier,
});
export const changeSettingsContact = (newValue, identifier) => ({
  type: CHANGE_SETTINGS_CONTACT,
  value: newValue,
  identifier: identifier,
});
export const changeSettingsInscription = (newValue, identifier) => ({
  type: CHANGE_SETTINGS_INSCRIPTION,
  value: newValue,
  identifier: identifier,
});
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
export const submitSearch = () => ({
  type: SUBMIT_SEARCH,
});
export const submitInscription = () => ({
  type: SUBMIT_INSCRIPTION,
});
export const submitContact = () => ({
  type: SUBMIT_CONTACT,
});
export const handleSuccessfulLogin = (token) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,

  token,
});

export const logout = () => ({
  type: LOGOUT,
});

export const fetchFavoriteGames = () => ({
  type: FETCH_FAVORITE_GAMES,
});
export const addItemToFav = (value) => {
  console.log(value);

  return {
    type: ADD_ITEM_TO_FAV,
    payload: value,
  };
};

export const fetchRentGames = () => ({
  type: FETCH_RENT_GAMES,
});
export const saveRentGames = (games) => ({
  type: SAVE_RENT_GAMES,
  games,
});

export const addItemToLoc = (value) => ({
  type: ADD_ITEM_TO_LOC,
  payload: value,
});
