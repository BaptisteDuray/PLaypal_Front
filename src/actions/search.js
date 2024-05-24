export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';

export const CHANGE_SETTINGS_FIELD = 'CHANGE_SETTINGS_FIELD';

export const changeInputMessage = (newValue) => ({
  type: CHANGE_INPUT_MESSAGE,
  value: newValue,
});

export const changeSettingsField = (newValue, identifier) => ({
  type: CHANGE_SETTINGS_FIELD,
  value: newValue,
  identifier: identifier,
});
