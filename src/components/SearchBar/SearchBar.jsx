import './SearchBar.scss';

import { useSelector, useDispatch } from 'react-redux';

import { Input, Form, FormField, Segment } from 'semantic-ui-react';

import { changeInputMessage, submitSearch } from '../../actions/search';

const SearchBar = () => {
  const value = useSelector((state) => state.inputMessage);

  const dispatch = useDispatch();
  return (
    <div className="SectionSearch">
      <h1>Louez-les tous !</h1>
      <div className="SearchBar">
        <Segment>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              console.log('submit');

              dispatch(submitSearch());

              const action = changeInputMessage('');
              dispatch(action);
            }}
          >
            <FormField>
              <Input
                icon="search"
                iconPosition="right"
                placeholder="Rechercher un jeu"
                value={value}
                onChange={(event) => {
                  // enregistrer event.target.value dans le champ inputMessage du state
                  // => pour modifier le state dans un store redux, il faut dispatch une
                  // action
                  //
                  // 3 étapes :
                  // - ajouter l'action dans l'annuaire
                  // - écrire le traitement de cette action dans le reducer
                  // - utiliser useDispatch dans le composant concerné
                  // Note : si on réutilise une action déjà existante, il y a juste la
                  // 3e étape

                  const action = changeInputMessage(event.target.value);
                  dispatch(action);
                }}
              />
            </FormField>
          </Form>
        </Segment>
      </div>
    </div>
  );
};

export default SearchBar;
