import {
  CHANGE_INPUT_MESSAGE,
  CHANGE_SETTINGS_CONTACT,
  CHANGE_SETTINGS_FIELD,
  HANDLE_SUCCESSFUL_LOGIN,
  CHANGE_SETTINGS_INSCRIPTION,
  ADD_ITEM_TO_FAV,
  ADD_ITEM_TO_LOC,
  SAVE_GAMES,
} from '../actions/search';
const initialState = {
  inputMessage: '',
  email: '',
  password: '',
  logged: false,
  // token JWT (quand l'utilisateur est authentifié)
  token: '',
  firstname: '',
  name: '',
  message: '',
  firstnameInscription: '',
  nameInscription: '',
  emailInscription: '',
  messageInscription: '',
  company: '',
  number: '',
  attachment: '',
  list: [],
  itemsFav: [],
  itemsLoc: [],
  isGamesLoaded: false,
  username: '',
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GAMES:
      return {
        ...state,
        list: action.games,
        // on indique que les recettes sont chargées
        //isGamesLoaded: true,
      };
    case CHANGE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.value,
      };
    case CHANGE_SETTINGS_FIELD:
      if (action.identifier === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      return {
        ...state,
        password: action.value,
      };
    case CHANGE_SETTINGS_CONTACT:
      if (action.identifier === 'firstname') {
        return {
          ...state,
          firstname: action.value,
        };
      } else if (action.identifier === 'name') {
        return {
          ...state,
          name: action.value,
        };
      } else if (action.identifier === 'email') {
        return {
          ...state,
          email: action.value,
        };
      } else if (action.identifier === 'message') {
        return {
          ...state,
          message: action.value,
        };
      }
      return state;
    case CHANGE_SETTINGS_INSCRIPTION:
      if (action.identifier === 'firstnameInscription') {
        return {
          ...state,
          firstnameInscription: action.value,
        };
      } else if (action.identifier === 'nameInscription') {
        return {
          ...state,
          nameInscription: action.value,
        };
      } else if (action.identifier === 'emailInscription') {
        return {
          ...state,
          emailInscription: action.value,
        };
      } else if (action.identifier === 'number') {
        return {
          ...state,
          number: action.value,
        };
      } else if (action.identifier === 'attachment') {
        return {
          ...state,
          attachment: action.value,
        };
      } else if (action.identifier === 'company') {
        return {
          ...state,
          company: action.value,
        };
      }
      return {
        ...state,
        messageInscription: action.value,
      };
    case ADD_ITEM_TO_FAV:
      return {
        ...state,
        itemsFav: action.game,
      };
    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        username: action.username,
        token: action.token,
        logged: true,
      };
    default:
      return state;
  }
};
export default reducer;
