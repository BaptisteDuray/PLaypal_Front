# C'est quoi react-router-dom ?

React Router DOM est un package NPM ou YARN qui permet d'implémenter un système de routage déclaratif et efficace dans une application React. Il fournit une façon de mapper des composants React à des URL spécifiques, permettant ainsi la navigation entre différentes vues sans rafraîchir la page

Installer avec Yarn: [https://classic.yarnpkg.com/en/package/react-router-dom]

## Explications de quelques composants utiliser dans playpal

Pour fonctionner, le composant doit toujours être importer

```js
import { Route, Routes } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
```

`<Link>`
Crée un lien vers une route spécifique, similaire à une balise `<a>` HTML.
(tu peux voir un exemple dans le fichier **Game.jsx**)

`<NavLink>`
est un composant spécial dérivé de `<Link>` qui sait si lui-même est "actif", "en attente" ou "en transition".
Utile pour ajouter du css specifique sur un bouton de navigation active par exemple (à l'image d'un toggle button) Un nom de classe 'active' est associé à ce composant.

**HeaderButton.jsx**

```js
<NavLink className="btnGrad" to="/liste-de-jeux">
  Les jeux
</NavLink>
```

**HeaderButton.scss**

```css
&.active {
  color: $secondary-color;
  height: auto;
}
```

`<Route>`
Définit une route et le composant à afficher quand l'URL correspond au chemin spécifié.
(tu peux voir un exemple dans le fichier **App.jsx**)

`<Routes>`
Remplace le composant Switch de la version 5. Il choisit la première route correspondante au lieu de les parcourir dans l'ordre. (tu peux voir un exemple dans le fichier **App.jsx**)

`<BrowserRouter>`
Implémente le routage en utilisant l'API HTML5 History. C'est le composant parent qui englobe toute l'application.

**App.jsx**

```js
<div className="App">
  <HeaderMenu />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Contact" element={<ContactPage />} />
    <Route path="/liste-de-jeux" element={<GamesList />} />
    <Route path="/liste-de-jeux/:slug" element={<GamePage />} />
    <Route path="/Connexion" element={<Settings />} />
    <Route path="/Inscription" element={<InscriptionPage />} />
    <Route path="/apropos" element={<Apropos />} />
    <Route path="/favoris" element={<FavoritePage />} />
    <Route path="/locations" element={<LocationPage />} />
    <Route path="/recherche-de-jeux" element={<FilteredGamesList />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
  <NavigationMobile />
  <MenuFooter />
</div>
```