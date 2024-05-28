import {
  CHANGE_INPUT_MESSAGE,
  CHANGE_SETTINGS_CONTACT,
  CHANGE_SETTINGS_FIELD,
  HANDLE_SUCCESSFUL_LOGIN,
  CHANGE_SETTINGS_INSCRIPTION,
} from '../actions/search';

const initialState = {
  inputMessage: '',
  email: '',
  password: '',
  nickname: '',
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
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default reducer;
