// pour trouver le jeu selon les params de l'url
// eslint-disable-next-line import/prefer-default-export
export function findGame(games, searchedSlug) {
  const game = games.find((testedGame) => {
    console.log('le jeu cherché');
    return testedGame.slug === searchedSlug;
  });
  return game;
}
