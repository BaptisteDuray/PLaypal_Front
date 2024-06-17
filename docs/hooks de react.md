# Qu'est-ce qu'un hook ?

Un hook est une fonction spéciale qui permet d'utiliser les fonctionnalités de React dans des composants fonctionnels, comme la gestion de l'état local, les cycles de vie, etc. Les hooks commencent par "use" (ex : useState, useEffect, etc.). Ils ont été introduits dans React 16.8.0 et offrent une alternative aux composants de classe pour gérer l'état et les effets de bord.

introduction au hokks grâce à la doc REACT:

[https://fr.legacy.reactjs.org/docs/hooks-intro.html]

Comme toute fonctionnalités spéciale de REACT, le hook doit être importé:

```js
import { useEffect } from 'react';
```

## Utilisation de UseState

Permet de déclarer des variables d'état locales dans des composants fonctionnels. Il renvoie un tableau avec la valeur actuelle de l'état et une fonction pour la mettre à jour.

// ContactPage.jsx
Dans cette exemple Playpal, le State sera un booleen, mais ça peut être une chaine de characteres, un tableau ou autres...

```js
// MESSAGE DE VALIDATION DU FORMULAIRE
const [formSubmitted, setFormSubmitted] = useState(false); // validé
const [formError, setFormError] = useState(false); // invalidé
```

on utilise une condition pour afficher le message. De balse, il n'est pas affiché (false) mais peut changer d'état et passer true.

```JS
// AFFICHAGE MESSAGE Vérifier si tous les champs obligatoires sont remplis
    if (!firstnameValue || !nameValue || !emailValue || !messageValue) {
      setFormError(true);
      return;
    }

    // Supprimer les message précédent
    setFormSubmitted(false);
    setFormError(false);


    // AFFICHAGE MESSAGE Définir formSubmitted sur true après une soumission réussie
    setFormSubmitted(true);

```

Video de GRAFIKART sur le useState
https://www.youtube.com/watch?v=ilqxZiXnwD8

## Utilisation de UseEffect

Permet d'exécuter des effets de bord, comme des appels d'API ou des abonnements, après que le composant a été rendu. Il prend une fonction d'effet et un tableau de dépendances optionnel.

Video de GRAFIKART
https://www.youtube.com/watch?v=vNLwY2UlbQg