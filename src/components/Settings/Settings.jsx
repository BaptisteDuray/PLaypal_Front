import Field from '../Field/Field';
import { useSelector, useDispatch } from 'react-redux';

import { changeSettingsField } from '../../actions/search';

import './Settings.scss';

const Settings = () => {
  const emailValue = useSelector((state) => state.email);
  const passwordValue = useSelector((state) => state.password);

  const dispatch = useDispatch();

  return (
    <div className="settings">
      <form className="settings-form">
        <Field
          identifier="email"
          placeholder="uno@playpal.fr"
          label="Identifiant"
          changeField={(identifier, newValue) => {
            //console.log(`identifier=${identifier}, newValue=${newValue}`);
            const action = changeSettingsField(newValue, identifier);
            dispatch(action);
          }}
          value={emailValue}
        />
        <Field
          identifier="password"
          placeholder=""
          label="Mot de passe"
          changeField={(identifier, newValue) => {
            // console.log(`identifier=${identifier}, newValue=${newValue}`);
            const action = changeSettingsField(newValue, identifier);
            dispatch(action);
          }}
          type="password"
          value={passwordValue}
        />
        <button type="submit" className="settings-submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Settings;
