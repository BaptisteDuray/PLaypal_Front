import { Link } from 'react-router-dom';
import './HeaderButton.scss';

const HeaderButton = () => {
  return (
    <div className="HeaderButton">
<<<<<<< HEAD
      <div className="userButton">
        <Link className="btnGrad" to="/liste-de-jeux">
          Les jeux
        </Link>
        <Link className="btnGrad" to="*">
          Mes favoris
        </Link>
        <Link className="btnGrad" to="*">
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
=======
      <Link className="btnGrad" to="/Contact">
        Contact
      </Link>
>>>>>>> brnache-dev-mb-2
    </div>
  );
};

export default HeaderButton;
