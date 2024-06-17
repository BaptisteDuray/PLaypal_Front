# le decoupage en composant REACT

Découper une interface en composants React permet de créer une application modulaire, réutilisable et maintenable. Les composants sont imbriqués et exportés/importés selon une syntaxe bien définie
Les composants permettent de diviser l'interface utilisateur en parties indépendantes et réutilisables. Ils peuvent faire référence à d'autres composants dans leur sortie, permettant de créer des abstractions de composants à n'importe quel niveau de détail.

### Sous-composants

Un composant peut utiliser d'autres composants dans son rendu. Ces composants enfants sont appelés sous-composants. Par exemple, un composant `App` peut utiliser plusieurs fois un composant `GamesList` qui lui même utilise un autre sous-composant `Game`

Exemple d'import-export du composant avec `<GamesList>`

`// GamesList.jsx
La fonction GamesList doit être exporté pour ensuite pourvoir être utiliser dans un nouveau composant

```js
export default GamesList;
```

// App.jsx
toujours importer le composant pour pouvoir ensuite l'utiliser et l'afficher dans notre fichier `<App>`

```Js
import GamesList from './GamesList';`
```

**Explication**: Le composant `<Route>` redirige vers le composant `<GamesList>` et affiche en URL /_liste-de-jeux_

```Js
<Route path="/liste-de-jeux" element={<GamesList />} />
```

## Composant parent et sous composant enfant avec `<GamesList>` et `<Game>`

Dans le projet Playpal, `<GamesList>` permet l'affichage de l'ensemble des jeux disponoble sur en magasin.
`<Game>` represente 1 jeu.
On importe donc le composant `<Games>` dans `<GamesList>`

// GamesList.jsx

```js
import Game from './Game';
```

Grâce au Props (paramêtres) `<Game>`, l'affichage du jeu sera géré dynamiquement.

// Game.jsx

```js
const Game = ({ name, description, category, price, status, image, id }) => {};
```

Ce composant retournera un objet.

Dans le composant `<GamesList>` on utilise la methode `map()` pour pouvoir afficher les données de l'objet defini dans `<Game>`.
En React, il est courant d'avoir un tableau de données (objets, nombres, chaînes, etc.) que l'on souhaite afficher sous forme de liste de composants.
La méthode `map()` de JavaScript permet de transformer chaque élément d'un tableau en un élément React correspondant.

// GamesList.jsx

```js
return (
  <div className="game-list-desktop">
    <div className="gamesList">
      <h1 className="title">Tous nos jeux</h1>
      {gamesList.map((game) => (
        <Game
          key={game.id}
          id={game.id}
          name={game.Name}
          description={game.Description}
          category={game.category}
          price={game.Price}
          status={game.Status}
          image={game.image}
        />
      ))}
    </div>
    <div className="background-img-desktop">
      <img src={backgroundImage} alt="couple qui joue à un jeu de société" />
    </div>
  </div>
);
```

Lorsque vous utilisez `map()` pour générer des listes de composants, React a besoin d'une prop spéciale appelée key pour identifier chaque élément de manière unique.