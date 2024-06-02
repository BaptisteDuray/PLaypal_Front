import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './HeaderButton.scss';

import { useSelector, useDispatch } from 'react-redux';

const HeaderButton = ({}) => {
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="HeaderButton">
      <div className="userButton">
        <Link className="btnGrad" to="/liste-de-jeux">
          Les jeux
        </Link>
        <Link className="btnGrad" to="/mes-favoris">
          Mes favoris
        </Link>
        <Link className="btnGrad" to="/mes-locations">
          Mes locations
        </Link>
      </div>

      <div className="guestButton">
        {isLogged ? (
          <>
            <Link className="btnGrad" to="/contact">
              Contact
            </Link>

            <Link className="btnGrad" to="/connexion" onClick={handleLogout}>
              Déconnexion
            </Link>
          </>
        ) : (
          <>
            <Link className="btnGrad" to="/contact">
              Contact
            </Link>
            <Link className="btnGrad" to="/inscription">
              Inscription
            </Link>
            <Link className="btnGrad" to="/connexion">
              Connexion
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

HeaderButton.propTypes = {
  /** Indique si l'utilisateur est connecté */
  logged: PropTypes.bool.isRequired,
};

export default HeaderButton;
