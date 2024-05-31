import { Link } from 'react-router-dom';
import './HeaderButton.scss';

const HeaderButton = () => {
  return (
    <div className="HeaderButton">
      <div className="userButton">
        <Link className="btnGrad" to="/liste-de-jeux">
          Les jeux
        </Link>
        <Link className="btnGrad" to="/favoris">
          Mes favoris
        </Link>
        <Link className="btnGrad" to="/locations">
          Mes locations
        </Link>
      </div>

      <div className="guestButton">
        <Link className="btnGrad" to="/Contact">
          Contact
        </Link>
        <Link className="btnGrad" to="/Inscription">
          Inscription
        </Link>
        <Link className="btnGrad" to="/Connexion">
          Connexion
        </Link>
      </div>
    </div>
  );
};

export default HeaderButton;
