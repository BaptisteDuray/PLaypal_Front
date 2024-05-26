import {
  CHANGE_INPUT_MESSAGE,
  CHANGE_SETTINGS_FIELD,
  HANDLE_SUCCESSFUL_LOGIN,
} from '../actions/search';

const initialState = {
  // ici le state initial
  inputMessage: '',

  email: '',

  password: '',

  nickname: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_MESSAGE:
      return {
        ...state,
        // si le reducer ne peut pas connaître tout seul la nouvelle valeur
        // => il faut fournir cette information en payload de l'action
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

    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        nickname: action.nickname,

        email: '',
        password: '',
      };

    default:
      return state;
  }
};

export default reducer;
