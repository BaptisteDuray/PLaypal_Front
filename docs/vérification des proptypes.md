## C'est quoi la verification de proptypes sous REACT

PropTypes est un outil simple mais puissant pour documenter et valider les props d'un composant React. Il aide à attraper les erreurs tôt dans le développement et facilite la maintenance du code

https://legacy.reactjs.org/docs/typechecking-with-proptypes.html

comment definir les proptypes:
importer la definition des proptypes dans le fichier

`import PropTypes from 'prop-types';`

### exemple avec le composant `<Game>`

```JS
Game.propTypes = {
name: PropTypes.string.isRequired,
description: PropTypes.string.isRequired,
category: PropTypes.shape({
name: PropTypes.string.isRequired,
}).isRequired,
price: PropTypes.string.isRequired,
status: PropTypes.string.isRequired,
image: PropTypes.string.isRequired,
};
```

Il existe plusieurs type `PropTypes.string`, `PropTypes.number`, `PropTypes.bool`, `PropTypes.func`, `PropTypes.array`, `PropTypes.object`, `PropTypes.shape`.

On ajoute .isRequired pour rendre une prop obligatoire (sans .isRequired, pas de message d'erreur si la données est absente)

### Pourquoi l'utiliser?

Cette vérification permet un affichage dans la console si la donnée ne correspond pas aux attentes ou si celle-ci est manquante. Cet outil n'est pas obligatoire mais facilite grandement le débogage et fait également partie des systèmes de sécurité mis en place côté front.
En production, les validations PropTypes sont ignorées pour optimiser les performances.