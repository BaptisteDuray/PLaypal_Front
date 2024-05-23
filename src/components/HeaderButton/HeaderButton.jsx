import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './HeaderButton.scss';

const HeaderButton = () => {
  return (
    <div className="HeaderButton">
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
  );
};

export default HeaderButton;
