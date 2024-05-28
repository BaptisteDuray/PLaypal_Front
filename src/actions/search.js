export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';

export const CHANGE_SETTINGS_FIELD = 'CHANGE_SETTINGS_FIELD';
export const CHANGE_SETTINGS_CONTACT = 'CHANGE_SETTINGS_CONTACT';
export const CHANGE_SETTINGS_INSCRIPTION = 'CHANGE_SETTINGS_INSCRIPTION';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_SEARCH = 'SUBMIT_SEARCH';

export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';

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

export const submitsearch = () => ({
  type: SUBMIT_SEARCH,
});

export const handleSuccessLogin = () => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  nickname,
});
