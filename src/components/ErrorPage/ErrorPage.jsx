import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Oops ! Page introuvable</h1>
      <p>Désolé, la page que vous recherchez n'a pas été trouvée.</p>
      <p>Voici quelques suggestions :</p>
      <ul>
        <li>Vérifiez l'URL pour vous assurer qu'elle est correcte.</li>
        <li>
          Retournez à la <a href="/">page d'accueil</a>.
        </li>
        <li>
          Utilisez le moteur de recherche pour trouver ce que vous cherchez.
        </li>
      </ul>
    </div>
  );
};

export default ErrorPage;
