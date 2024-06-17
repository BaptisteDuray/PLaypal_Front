# JSX et SCSS

## JSX et JS

JSX (JavaScript XML) est une extension de syntaxe pour JavaScript, principalement utilisée avec la bibliothèque React. Il permet d'écrire du code qui ressemble à du HTML dans des fichiers JavaScript. JSX facilite la création de composants React en permettant d'écrire du code HTML directement dans le code JavaScript. Le code JSX doit être compilé en JavaScript avant d'être exécuté dans un navigateur.

introduction au jsx
[https://fr.legacy.reactjs.org/docs/introducing-jsx.html]

## le SCSS plutôt que le CSS

SCSS est un langage de script de préprocesseur qui est un sur-ensemble de CSS. Il fournit des fonctionnalités supplémentaires qui facilitent l'écriture de code CSS plus expressif et maintenable, comme les variables, l'imbrication et les mixins (montrer exemple playpal)

Ajouter la dependance sass a son projet, permet d'utiliser de SCSS
[https://sass-lang.com/]

### variables

En SCSS, une variable est un conteneur qui permet de stocker une valeur, comme une couleur, une taille de police, une marge, etc. Les variables SCSS commencent toujours par le symbole $ suivi d'un nom.
Dans le projet PLaypal, un fichier SCSS permet de stocker l'ensemble des variable dans un seul et même fichier.
Ici, nous utilisons les variables pour definir les couleurs et les typo du site.

//variables.scss

```scss
// Code couleur variables
$primary-color: #0f1231;
$secondary-color: #ff323e;
$Bluesky-color: #c3e4f5;

// font variables
$title: 'Alfa Slab One', serif;
$text: 'Akshar', sans-serif;
```

Pour utilisé ses varaible, il suffit de l'importer

//Game.scss

```SCSS
@import '/src/styles/variables';
```

### L'imbrication

L'imbrication est une fonctionnalité de SCSS qui permet de réduire l'écriture de code CSS en permettant de définir des sélecteurs à l'intérieur d'autres sélecteurs. Cela signifie que vous pouvez définir des styles pour un élément et ses enfants sans avoir à répéter les sélecteurs.

//Apropos.scss

```SCSS
.apropos {
  margin: 2rem;
  justify-content: center;
  display: flex;
  h2,
  h3 {
    font-family: 'Alfa Slab One', serif;
    color: $primary-color;
    margin: 1rem;
  }}
```