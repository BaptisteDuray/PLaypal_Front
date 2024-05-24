import './Game.scss';
// image afficher par defaut si pas d'image
import defaultImage from '../../assets/icon/pawn-icon.png';

const GamesList = () => {
  return (
    <div className="cardList">
      <div className="game-image">
        <img src={defaultImage} alt="la boite du jeu" />
        <button className="btn-view-game" type="button">
          voir le jeu
        </button>
      </div>

      <div className="informations">
        <h3>Nom du jeu</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint
          tempora, vero eveniet reprehenderit, hic ea voluptates iure sed et
          commodi, vel dolore illo! Aliquam quas recusandae unde nam nemo!
        </p>
        <p className="tags-games-list">les tags</p>
        <strong className="price-games-list">à partir de 10€</strong>
      </div>
    </div>
  );
};

export default GamesList;
