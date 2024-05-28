import { useSelector, useDispatch } from 'react-redux';
import { changeSettingsContact, submitContact } from '../../actions/search';

import '../Settings/Settings';
import Field from '../Field/Field';
import './ContactPage.scss';

const ContactPage = () => {
  const firstnameValue = useSelector((state) => state.firstname);
  const nameValue = useSelector((state) => state.name);
  const emailValue = useSelector((state) => state.email);
  const messageValue = useSelector((state) => state.message);

  const dispatch = useDispatch();

  return (
    <div classname="Contact">
      <div className="settings">
        <form
          className="settings-form"
          onSubmit={(event) => {
            event.preventDefault();
            // console.log('submit');
            /* on envoie une action, qui déclenchera une requete en passant par
        authMiddleware */
            dispatch(submitContact());
          }}
        >
          <Field
            identifier="firstname"
            placeholder="John"
            label="Prénom"
            changeField={(identifier, newValue) => {
              const action = changeSettingsContact(newValue, identifier);
              dispatch(action);
            }}
            value={firstnameValue}
          />
          <Field
            identifier="name"
            placeholder="DOE"
            label="NOM"
            changeField={(identifier, newValue) => {
              const action = changeSettingsContact(newValue, identifier);
              dispatch(action);
            }}
            type="text"
            value={nameValue}
          />
          <Field
            identifier="email"
            placeholder="cluedo@playpal.fr"
            label="Mail"
            changeField={(identifier, newValue) => {
              const action = changeSettingsContact(newValue, identifier);
              dispatch(action);
            }}
            type="text"
            value={emailValue}
          />
          <Field
            identifier="message"
            placeholder="..."
            label="Message"
            changeField={(identifier, newValue) => {
              const action = changeSettingsContact(newValue, identifier);
              dispatch(action);
            }}
            type="text"
            value={messageValue}
          />

          <button
            type="submit"
            className="settings-submit"
            onClick={(event) => {
              event.preventDefault();
              // console.log('submit');
              /* on envoie une action, qui déclenchera une requete en passant par
authMiddleware */
              dispatch(submitContact());
            }}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
