import { useSelector, useDispatch } from 'react-redux';

import { changeSettingsInscription } from '../actions/search';
import './InscriptionPage.scss';

import Field from '../components/Field/Field';

const InscriptionPage = () => {
  const firstnameInscriptionValue = useSelector(
    (state) => state.firstnameInscription
  );
  const nameInscriptionValue = useSelector((state) => state.nameInscription);
  const emailInscriptionValue = useSelector((state) => state.emailInscription);
  const messageInscriptionValue = useSelector(
    (state) => state.messageInscription
  );
  const companyValue = useSelector((state) => state.company);
  const numberValue = useSelector((state) => state.number);
  const attachmentValue = useSelector((state) => state.attachment);

  const dispatch = useDispatch();

  return (
    <div className="Contact">
      <div className="settings">
        <form
          className="settings-form"
          onSubmit={(event) => {
            event.preventDefault();
            // console.log('submit');
            /* on envoie une action, qui déclenchera une requete en passant par
        authMiddleware */
            dispatch(submitInscription());
          }}
        >
          <Field
            identifier="firstnameInscription"
            placeholder="John"
            label="Prénom"
            changeField={(identifier, newValue) => {
              const action = changeSettingsInscription(newValue, identifier);
              dispatch(action);
            }}
            value={firstnameInscriptionValue}
          />
          <Field
            identifier="nameInscription"
            placeholder="DOE"
            label="NOM"
            changeField={(identifier, newValue) => {
              const action = changeSettingsInscription(newValue, identifier);
              dispatch(action);
            }}
            type="text"
            value={nameInscriptionValue}
          />
          <Field
            identifier="company"
            placeholder="Playpal"
            label="Société"
            changeField={(identifier, newValue) => {
              const action = changeSettingsInscription(newValue, identifier);
              dispatch(action);
            }}
            type="text"
            value={companyValue}
          />
          <Field
            identifier="emailInscription"
            placeholder="cluedo@playpal.fr"
            label="Mail"
            changeField={(identifier, newValue) => {
              const action = changeSettingsInscription(newValue, identifier);
              dispatch(action);
            }}
            type="text"
            value={emailInscriptionValue}
          />
          <Field
            identifier="number"
            placeholder="..."
            label="Numéro de téléphone"
            changeField={(identifier, newValue) => {
              const action = changeSettingsInscription(newValue, identifier);
              dispatch(action);
            }}
            type="number"
            value={numberValue}
          />
          <Field
            identifier="messageInscription"
            placeholder="..."
            label="Message"
            changeField={(identifier, newValue) => {
              const action = changeSettingsInscription(newValue, identifier);
              dispatch(action);
            }}
            type="text"
            value={messageInscriptionValue}
          />
          <Field
            identifier="attachment"
            placeholder="..."
            label="Image"
            changeField={(identifier, newValue) => {
              const action = changeSettingsInscription(newValue, identifier);
              dispatch(action);
            }}
            type="file"
            value={attachmentValue}
          />

          <button type="submit" className="settings-submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default InscriptionPage;
