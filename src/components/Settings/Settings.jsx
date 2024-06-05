import Field from '../Field/Field';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { changeSettingsField, submitLogin } from '../../actions/search';

import './Settings.scss';

const Settings = () => {
  const emailValue = useSelector((state) => state.email);
  const passwordValue = useSelector((state) => state.password);
  const isLogged = useSelector((state) => state.logged);
  const [loginError, setLoginError] = useState(false); // Nouvel état pour gérer l'erreur de connexion

  if (isLogged) {
    return <Navigate to="/liste-de-jeux" />;
  } else {
    <Navigate to="/" />;
  }

  const dispatch = useDispatch();

  const vider = () => {
    dispatch(changeSettingsField('', 'email'));
    dispatch(changeSettingsField('', 'password'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginError(false); // Réinitialiser l'erreur de connexion

    // Vérifier si l'email et le mot de passe sont valides
    // (vous devrez implémenter cette logique dans votre action Redux submitLogin)
    const isLoginValid = dispatch(submitLogin(emailValue, passwordValue));

    if (!isLoginValid) {
      setLoginError(true);
      vider();
    }
  };

  return (
    <div className="settings">
      <form className="settings-form" onSubmit={handleSubmit}>
        <Field
          identifier="email"
          placeholder="uno@playpal.fr"
          label="Identifiant"
          changeField={(identifier, newValue) => {
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
            const action = changeSettingsField(newValue, identifier);
            dispatch(action);
          }}
          type="password"
          value={passwordValue}
        />

        <div className="settings-button-submit">
          <div>
            <button type="submit" className="settings-submit">
              Se Connecter
            </button>
          </div>
          <p>Nouveau chez Playpal ?</p>
          <div>
            <button type="submit" className="settings-submit">
              <Link to="/Inscription">Créez votre compte Playpal</Link>
            </button>
          </div>
        </div>
        {loginError && (
          <div className="error-message">
            <p>Email ou mot de passe invalide. Veuillez réessayer.</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Settings;
