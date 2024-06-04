import { useSelector, useDispatch } from 'react-redux';

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

  const handleFieldChange = (identifier, newValue) => {
    dispatch(changeSettingsInscription(newValue, identifier));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(submitInscription());
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

          <div className="validation-inscription">
            <p>Inscription validée !</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InscriptionPage;
