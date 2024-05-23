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
        <p>Mes favoris</p>
      </div>
      <div className="BlocIcon">
        <img src="/src/assets/icon/loupe-icone2.png" alt="loupe recherche" />
        <p>Recherches</p>
      </div>
      <div className="BlocIcon">
        <img src="/src/assets/icon/agenda-icon2.png" alt="agenda" />
        <p>Mes réservation</p>
      </div>
      <div className="BlocIcon">
        <img src="/src/assets/icon/avatar2.png" alt="compte" />
        <p>connexion</p>
      </div>
    </div>
  );
};

export default NavigationMobile;
