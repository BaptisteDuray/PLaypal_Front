# Creation d'un environnement de developpement REACT avec VITE et YARN

## Pourquoi utiliser Vite

Vite est un outil de développement front-end qui permet de créer rapidement des applications web modernes.
Vite configure automatiquement les dépendances, les plugins et la structure de fichiers appropriés pour ce framework (REACT,Svelte, Vue...). Cela évite d'avoir à configurer manuellement l'environnement de développement et permet de démarrer immédiatement le codage de l'application.

## Installation avec un modèle vite-React

Le projet Playpal a été configurer avec un modéle Vite fourni par O'clock dans un repository Github. Grâce un a modéle vite, on peut créer une bose de travail personnaliser et les réutiliser dans d'autre projet.

## Objectif

Ce modèle ne sert pas à grand chose tout seul, l'idée est de se _baser sur_ le modèle pour nos projets.

Il faut le cloner dans le dossier dans lequel on a tous nos projets de la spé.

On peut se baser sur lui pour :

- démarrer un **nouveau projet** avec un environnement fiable et configuré
- travailler sur un **challenge** avec des dossiers, des fichiers pré-existants

## Utilisation

Il faut avant tout cloner les repo contenant le modèle vite, dans le dossier dans lequel sera installer le projet.

- rendez vous dans le dossier qui va contenir votre nouveau projet

  > le dossier `React-modele-vite` **doit** aussi s'y trouver

- lancer l'assistant pour récupérer le dépôt distant :

      ```sh
      cd dossier/avec/mon_projet
      # Exemple : ../../../Spe-React

      # lancer le script de son modèle
      ./React-modele-vite/bin/install.sh
      # si nécessaire, donner les droits à ce fichier :
      # `chmod +x ./React-modele-vite/bin/install.sh`
      # (un `sudo` peut être nécessaire)

      # renseigner soit :
      #   - le nom de votre nouveau projet (ex : playpal)
      #   - soit l'adresse SSH d'un dépôt Git (ex : git@github.com:O-clock-MA_PROMO/NOM_PROJET.git)
      ```

- ou copier manuellement les dossiers et fichiers :

      ```sh
      # Exemple : après avoir cloné un challenge dans le dossier mon-projet/

      # direction le dossier du challenge
      cd mon-challenge

      # copie des fichiers cachés et non-cachés présents à la racine du modèle
      # note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
      cp -n ../React-modele-vite/{.*,*} .

      # copie (récursive) des dossiers src/, public/ et .vscode
      # note : des alertes peuvent être affichées à propos de fichiers ignorés, c'est normal
      cp -rn ../React-modele-vite/{src,public,.vscode} .

      # installation des dépendances listées dans le package.json
      yarn

      # lancement du serveur de dev
      yarn dev
      ```

## Build du projet

Le mode d'utilisation par défaut consiste à lancer un serveur de développement
avec la commande `yarn dev`.  
Dans ce cas tout est géré en mémoire :
on ne voit jamais le résultat concret du travail de Vite.

Vite peut toutefois produire une version concrète du projet
dans un dossier `dist/` avec la commande `yarn build`.

`build` permet de construire le projet pour la **production**
(version prête pour hébergement).

- assemblage des fichiers
- copie de fichiers
- nettoyage du code
- minification du code
- …

```sh
# dans le dossier du projet
cd mon-projet

# build de production : les fichiers sont rassemblés *et optimisés*
yarn build
```

### comment installer un projet react vite (sans modèle) avec cette video:

[https://www.youtube.com/watch?v=EdB_lK7ICYc]

## YARN ou NPM

NPM (Node Package Manager) et Yarn sont deux gestionnaires de paquets populaires pour JavaScript, principalement utilisés dans l'écosystème Node.js et les projets front-end modernes.

### NPM (Node Package Manager)

- NPM est le gestionnaire de paquets officiel et par défaut pour Node.js. Il est installé automatiquement avec Node.js.
- Il gère les dépendances d'un projet via le fichier package.json.
- NPM a été critiqué par le passé pour des problèmes de performances et de fiabilité lors de l'installation de gros projets avec de nombreuses dépendances.

### Yarn

- Il utilise un fichier yarn.lock pour verrouiller les versions exactes des dépendances installées, garantissant une installation cohérente sur différentes machines.
- Yarn est généralement plus rapide que NPM pour l'installation des dépendances, en particulier pour les gros projets.
- Il offre des fonctionnalités supplémentaires comme l'installation parallèle des paquets et une meilleure gestion des conflits de dépendances.

**Pour ses meilleur performance et sa stabilité, On a décider d'utiliser Yarn pour le projet Playpal!**
doc de Yarn : [https://classic.yarnpkg.com/en/]

## Utilitaires

### Extensions VScode

Certaines extensions sont conseillées avec ce modèle ;
vous trouverez la liste dans le fichier `.vscode/extensions.json`.  
Dans ce dossier, vous trouverez aussi quelques recommandations de configuration
de VS Code.

#### ESLint

_Linter_ pour le JavaScript :
vous permet de trouver et de corriger (quelquefois automatiquement) des
erreurs dans votre code.

> <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>

`ext install dbaeumer.vscode-eslint`

#### Prettier

_Code formatter_ :
impose un style cohérent en analysant votre code et en le réimprimant avec des règles configurées.

> <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>

`ext install esbenp.prettier-vscode`