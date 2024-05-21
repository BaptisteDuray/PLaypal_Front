import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from 'semantic-ui-react';

const Game = () => {
  return (
    <Card>
      <Image src="https://randomfox.ca/images/5.jpg" wrapped ui={false} />
      <CardContent>
        <CardHeader>Nom du Jeu</CardHeader>
        <CardMeta>Disponible</CardMeta>
        <CardMeta>Nombre de joueur</CardMeta>
        <CardDescription>Description</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Game;
