import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeSettingsContact, submitContact } from '../../actions/search';
import Field from '../Field/Field';
import './ContactPage.scss';

const ContactPage = () => {
  const firstnameValue = useSelector((state) => state.firstname);
  const nameValue = useSelector((state) => state.name);
  const emailValue = useSelector((state) => state.emailContact);
  const messageValue = useSelector((state) => state.message);
  //const contactNumberValue = useSelector((state) => state.contactNumber);
  const companyValue = useSelector((state) => state.company);

  const dispatch = useDispatch();

  // AFFICHAGE MESSAGE (avec useState) Ajout d'une variable d'état pour suivre l'état de la soumission du formulaire
  const [formSubmitted, setFormSubmitted] = useState(false); // validé
  const [formError, setFormError] = useState(false); // invalidé

  const handleFieldChange = (identifier, newValue) => {
    dispatch(changeSettingsContact(newValue, identifier));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // AFFICHAGE MESSAGE Vérifier si tous les champs obligatoires sont remplis
    if (!firstnameValue || !nameValue || !emailValue || !messageValue) {
      setFormError(true);
      return;
    }

    // Supprimer les message précédent
    setFormSubmitted(false);
    setFormError(false);

    dispatch(submitContact());

    // AFFICHAGE MESSAGE Définir formSubmitted sur true après une soumission réussie
    setFormSubmitted(true);
  };

  return (
    <div className="Contact">
      <div className="settings">
        <form className="settings-form" onSubmit={handleSubmit}>
          <Field
            identifier="firstname"
            placeholder="John"
            label="Prénom*"
            changeField={handleFieldChange}
            value={firstnameValue}
          />
          <Field
            identifier="name"
            placeholder="DOE"
            label="NOM*"
            changeField={handleFieldChange}
            type="text"
            value={nameValue}
          />
          <Field
            identifier="company"
            placeholder="Playpal"
            label="Société"
            changeField={handleFieldChange}
            type="text"
            value={companyValue}
          />
          <Field
            identifier="emailContact"
            placeholder="cluedo@playpal.fr"
            label="Mail*"
            changeField={handleFieldChange}
            type="text"
            value={emailValue}
          />
          {/* <Field
            identifier="contactNumber"
            placeholder="..."
            label="Numéro de téléphone"
            changeField={handleFieldChange}
            type="number"
            value={contactNumberValue}
          /> */}
          <Field
            identifier="message"
            placeholder="..."
            label="Message*"
            changeField={handleFieldChange}
            type="text"
            value={messageValue}
          />

          <p className="legend">*champs obligatoires</p>
          <button type="submit" className="settings-submit">
            Envoyer
          </button>

          {formSubmitted && (
            <div className="validation-send-message">
              <p>
                Merci, votre message a bien été envoyé. Votre demande sera
                traitée dans les plus brefs délais.
              </p>
            </div>
          )}
          {formError && (
            <div className="error-message">
              <p>
                Veuillez remplir tous les champs obligatoires avant d'envoyer le
                formulaire.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
