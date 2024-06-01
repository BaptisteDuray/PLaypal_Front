export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';
export const CHANGE_SETTINGS_FIELD = 'CHANGE_SETTINGS_FIELD';
export const CHANGE_SETTINGS_CONTACT = 'CHANGE_SETTINGS_CONTACT';
export const CHANGE_SETTINGS_INSCRIPTION = 'CHANGE_SETTINGS_INSCRIPTION';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
export const SUBMIT_CONTACT = 'SUBMIT_CONTACT';
export const SUBMIT_INSCRIPTION = 'SUBMIT_INSCRIPTION';
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const SAVE_GAMES = 'SAVE_GAMES';
export const FETCH_GAMES = 'FETCH_GAMES';
// ajout d'une action pour ajouter en favoris
export const ADD_ITEM_TO_FAV = 'ADD_ITEM_TO_FAV';
// ajout d'une action pour ajouter en location
export const ADD_ITEM_TO_LOC = 'ADD_ITEM_TO_LOC';
export const fetchGames = () => ({
  type: FETCH_GAMES,
});
export const saveGames = (games) => ({
  type: SAVE_GAMES,
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
export const addItemToFav = (state, action) => ({
  type: ADD_ITEM_TO_FAV,
});
export const addItemToLoc = (game) => ({
  type: ADD_ITEM_TO_LOC,
});
