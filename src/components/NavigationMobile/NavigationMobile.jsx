import './NavigationMobile.scss';
import { Link } from 'react-router-dom';
import pawn from '../../assets/icon/pawn-icon2.png';
import fav from '../../assets/icon/fav2.png';
import search from '../../assets/icon/loupe-icone2.png';
import loc from '../../assets/icon/agenda-icon2.png';
import connect from '../../assets/icon/avatar2.png';

const NavigationMobile = () => {
  return (
    <div className="NavigationMobile">
      <Link className="BlocIcon" to="/liste-de-jeux">
        <img src={pawn} alt="pion" />
        <span>Les jeux</span>
      </Link>

      <Link className="BlocIcon" to="/favoris">
        <img src={fav} alt="favoris" />
        <span>Mes favoris</span>
      </Link>

      <Link className="BlocIcon" to="/">
        <img src={search} alt="loupe recherche" />
        <span>Recherche</span>
      </Link>

      <Link className="BlocIcon" to="/locations">
        <img src={loc} alt="agenda" />
        <span>Mes Locations</span>
      </Link>
      <Link className="BlocIcon" to="/connexion">
        <img src={connect} alt="compte" />
        <span>connexion</span>
      </Link>
    </div>
  );
};

export default NavigationMobile;
