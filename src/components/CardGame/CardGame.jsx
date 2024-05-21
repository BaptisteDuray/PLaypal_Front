import { CardGroup } from 'semantic-ui-react';
import Game from './Game';

const CardGame = () => {
  return (
    <CardGroup itemsPerRow={3}>
      <Game />
      <Game />
    </CardGroup>
  );
};

export default CardGame;
