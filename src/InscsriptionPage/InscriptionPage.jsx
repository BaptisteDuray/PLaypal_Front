import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  changeSettingsInscription,
  submitInscription,
} from '../actions/search';

import Field from '../components/Field/Field';
import './InscriptionPage.scss';

const InscriptionPage = () => {
  const firstnameInscriptionValue = useSelector(
    (state) => state.firstnameInscription
  );
  const nameInscriptionValue = useSelector((state) => state.nameInscription);
  const emailInscriptionValue = useSelector((state) => state.emailInscription);
  const passwordInscriptionValue = useSelector(
    (state) => state.passwordInscription
  );
  const attachmentValue = useSelector((state) => state.attachment);

  const dispatch = useDispatch();

  // AFFICHAGE MESSAGE (avec useState) Ajout d'une variable d'état pour suivre l'état de la soumission du formulaire
  const [formSubmitted, setFormSubmitted] = useState(false); // validé
  const [formError, setFormError] = useState(false); // invalidé

  const handleFieldChange = (identifier, newValue) => {
    dispatch(changeSettingsInscription(newValue, identifier));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // AFFICHAGE MESSAGE Vérifier si tous les champs obligatoires sont remplis
    // TODO faire un new message erreur si email deja utilisé (email invalide)
    if (
      !firstnameInscriptionValue ||
      !nameInscriptionValue ||
      !emailInscriptionValue ||
      !passwordInscriptionValue
    ) {
      setFormError(true);
      return;
    }

    // Supprimer les message précédent
    setFormSubmitted(false);
    setFormError(false);

    dispatch(submitInscription());
    // AFFICHAGE MESSAGE Définir formSubmitted sur true après une soumission réussie
    setFormSubmitted(true);
  };

  return (
    <div className="Contact">
      <div className="settings">
        <form>
          <Field
            identifier="firstnameInscription"
            placeholder="John"
            label="*Prénom"
            changeField={handleFieldChange}
            value={firstnameInscriptionValue}
          />
          <Field
            identifier="nameInscription"
            placeholder="DOE"
            label="*Nom"
            changeField={handleFieldChange}
            type="text"
            value={nameInscriptionValue}
          />

          <Field
            identifier="emailInscription"
            placeholder="cluedo@playpal.fr"
            label="*Mail"
            changeField={handleFieldChange}
            type="text"
            value={emailInscriptionValue}
          />

          <Field
            identifier="passwordInscription"
            placeholder="Créer un mot de passe"
            label="*Mot de passe"
            changeField={handleFieldChange}
            type="password"
            value={passwordInscriptionValue}
          />

          <Field
            identifier="attachment"
            placeholder="..."
            label="Image"
            changeField={handleFieldChange}
            type="file"
            value={attachmentValue}
          />

          <p className="legend">*champs obligatoires</p>
          <button
            type="submit"
            className="settings-submit"
            onClick={handleSubmit}
          >
            Envoyer
          </button>

          {formSubmitted && (
            <div className="validation-send-message">
              <p>Inscription validée !</p>
            </div>
          )}
          {formError && (
            <div className="error-message">
              <p>
                Veuillez remplir tous les champs obligatoires pour valider votre
                inscription.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default InscriptionPage;
