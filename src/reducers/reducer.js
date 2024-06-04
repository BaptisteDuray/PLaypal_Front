import {
  CHANGE_INPUT_MESSAGE,
  CHANGE_SETTINGS_CONTACT,
  CHANGE_SETTINGS_FIELD,
  HANDLE_SUCCESSFUL_LOGIN,
  LOGOUT,
  CHANGE_SETTINGS_INSCRIPTION,
  ADD_ITEM_TO_FAV,
  ADD_ITEM_TO_LOC,
  SAVE_GAMES,
  SAVE_FAVORITE_GAMES,
  SELECT_GAME,
} from '../actions/search';

const initialState = {
  inputMessage: '',
  email: '',
  password: '',
  logged: false,
  token: '',
  firstname: '',
  name: '',
  message: '',
  company: '',
  firstnameInscription: '',
  nameInscription: '',
  emailInscription: '',
  passwordInscription: '',
  emailContact: '',
  messageInscription: '',
  // contactNumber: '',
  attachment: '',
  list: [],
  itemsFav: [],
  itemsLoc: [],
  isGamesLoaded: false,
  username: '',
  selectedGame: '',
};

const reducer = (state = initialState, action = {}) => {
  console.log('PATATE', action);
  switch (action.type) {
    case SELECT_GAME:
      return {
        ...state,
        selectedGame: action.game,
      };
    case SAVE_GAMES:
      return {
        ...state,
        list: action.games,
        isGamesLoaded: true,
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
      } else if (action.identifier === 'company') {
        return {
          ...state,
          company: action.value,
        };
      } else if (action.identifier === 'emailContact') {
        return {
          ...state,
          emailContact: action.value,
        };
      } else if (action.identifier === 'contactNumber') {
        return {
          ...state,
          contactNumber: action.value,
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
      } else if (action.identifier === 'passwordInscription') {
        return {
          ...state,
          passwordInscription: action.value,
        };
      } else if (action.identifier === 'attachment') {
        return {
          ...state,
          attachment: action.value,
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

        token: action.token,
        logged: true,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
      };
    case ADD_ITEM_TO_FAV:
      return {
        ...state,
        payload,
      };
    case SAVE_FAVORITE_GAMES:
      return {
        ...state,
        itemsFav: action.games,
      };

    default:
      return state;
  }
};

export default reducer;
