import './SearchBar.scss';

import { Input, Form, FormField, Segment } from 'semantic-ui-react';

const SearchBar = () => {
  return (
    <div className="SectionSearch">
      <h1>Louez-les tous !</h1>
      <div className="SearchBar">
        <Segment>
          <Form>
            <FormField>
              <Input
                icon="search"
                iconPosition="right"
                placeholder="Rechercher un jeu"
              />
            </FormField>
          </Form>
        </Segment>
      </div>
    </div>
  );
};

export default SearchBar;
