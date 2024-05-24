import './NavigationMobile.scss';

const NavigationMobile = () => {
  return (
    <div className="NavigationMobile">
      <div className="BlocIcon">
        <img src="/src/assets/icon/pawn-icon2.png" alt="pion" />
        <span>Les jeux</span>
      </div>
      <div className="BlocIcon">
        <img src="/src/assets/icon/fav2.png" alt="favoris" />
        <span>Mes favoris</span>
      </div>
      <div className="BlocIcon">
        <img src="/src/assets/icon/loupe-icone2.png" alt="loupe recherche" />
        <span>Recherches</span>
      </div>
      <div className="BlocIcon">
        <img src="/src/assets/icon/agenda-icon2.png" alt="agenda" />
        <span>Mes réservation</span>
      </div>
      <div className="BlocIcon">
        <img src="/src/assets/icon/avatar2.png" alt="compte" />
        <span>connexion</span>
      </div>
    </div>
  );
};

export default NavigationMobile;
