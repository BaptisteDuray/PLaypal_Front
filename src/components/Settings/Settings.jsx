import Field from '../Field/Field';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { changeSettingsField, submitLogin } from '../../actions/search';

import './Settings.scss';

const Settings = () => {
  const emailValue = useSelector((state) => state.email);
  const passwordValue = useSelector((state) => state.password);

  const dispatch = useDispatch();

  return (
    <div className="settings">
      <form
        className="settings-form"
        onSubmit={(event) => {
          event.preventDefault();
          // console.log('submit');
          /* on envoie une action, qui déclenchera une requete en passant par
        authMiddleware */
          dispatch(submitLogin());
        }}
      >
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
          Se Connecter
        </button>
        <div>
          Nouveau chez Playpal?
          <button type="submit" className="settings-submit">
            <Link to="/Inscription">Créez votre compte Playpal</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
