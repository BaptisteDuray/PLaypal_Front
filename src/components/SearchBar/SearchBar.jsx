import './SearchBar.scss';

import { Input, Form, FormField, Segment } from 'semantic-ui-react';

//import image from '../../assets/image/background-img.jpg';

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
