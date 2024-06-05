import { Link } from 'react-router-dom';
import './RedirectionPage.scss';

const RedirectionPage = () => {
  return (
    <div className="Redir">
      Veuillez vous connecter pour accéder à cette page:
      <Link className="btnConnex" to="/connexion">
        Connexion
      </Link>
    </div>
  );
};

export default RedirectionPage;
