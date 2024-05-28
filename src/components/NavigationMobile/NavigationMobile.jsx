import './NavigationMobile.scss';
import { Link } from 'react-router-dom';

const NavigationMobile = () => {
  return (
    <div className="NavigationMobile">
      <Link className="BlocIcon" to="/liste-de-jeux">
        <img src="/src/assets/icon/pawn-icon2.png" alt="pion" />
        <span>Les jeux</span>
      </Link>

      <a href="*" className="BlocIcon">
        <img src="/src/assets/icon/fav2.png" alt="favoris" />
        <span>Mes favoris</span>
      </a>

      <Link className="BlocIcon" to="/">
        <img src="/src/assets/icon/loupe-icone2.png" alt="loupe recherche" />
        <span>Recherches</span>
      </Link>

      <a href="*" className="BlocIcon">
        <img src="/src/assets/icon/agenda-icon2.png" alt="agenda" />
        <span>Mes Locations</span>
      </a>
      <Link className="BlocIcon" to="/Connexion">
        <img src="/src/assets/icon/avatar2.png" alt="compte" />
        <span>connexion</span>
      </Link>
    </div>
  );
};

export default NavigationMobile;
