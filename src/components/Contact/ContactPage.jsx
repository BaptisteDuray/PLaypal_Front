import { useSelector, useDispatch } from 'react-redux';
import { changeSettingsContact, submitContact } from '../../actions/search';
import Field from '../Field/Field';
import './ContactPage.scss';

const ContactPage = () => {
  const firstnameValue = useSelector((state) => state.firstname);
  const nameValue = useSelector((state) => state.name);
  const emailValue = useSelector((state) => state.email);
  const messageValue = useSelector((state) => state.message);
  const contactNumberValue = useSelector((state) => state.contactNumber);

  const dispatch = useDispatch();

  const handleFieldChange = (identifier, newValue) => {
    dispatch(changeSettingsContact(newValue, identifier));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitContact());
  };

  return (
    <div className="Contact">
      <div className="settings">
        <form className="settings-form" onSubmit={handleSubmit}>
          <Field
            identifier="firstname"
            placeholder="John"
            label="Prénom"
            changeField={handleFieldChange}
            value={firstnameValue}
          />
          <Field
            identifier="name"
            placeholder="DOE"
            label="NOM"
            changeField={handleFieldChange}
            type="text"
            value={nameValue}
          />
          <Field
            identifier="email"
            placeholder="cluedo@playpal.fr"
            label="Mail"
            changeField={handleFieldChange}
            type="text"
            value={emailValue}
          />
          <Field
            identifier="contactNumber"
            placeholder="..."
            label="Numéro de téléphone"
            changeField={handleFieldChange}
            type="number"
            value={contactNumberValue}
          />
          <Field
            identifier="message"
            placeholder="..."
            label="Message"
            changeField={handleFieldChange}
            type="text"
            value={messageValue}
          />

          <button type="submit" className="settings-submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
