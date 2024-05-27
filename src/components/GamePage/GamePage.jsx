// Page detail d'un jeu
// quand on clique sur la carte d'un jeu
import './GamePage.scss';
import defaultImage from '../../assets/icon/pawn-icon.png';
import iconFav from '../../assets/icon/fav2.png';

const Game = () => {
  return (
    <article className="cardgame-page">
      <h3>Nom du jeu</h3>
      <div className="available-tag"> ●Disponible</div>

      <div className="game-image">
        <img src={defaultImage} alt="la boite du jeu" />
      </div>

      <div className="informations">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint
          tempora, vero eveniet reprehenderit, hic ea voluptates iure sed et
          commodi, vel dolore illo! Aliquam quas recusandae unde nam nemo! vero
          eveniet reprehenderit, hic ea voluptates iure sed et commodi, vel
          dolore illo! Aliquam quas recusandae unde nam nemo!
        </p>
        <p className="tags-games-list">les tags</p>
      </div>

      <div className="reservation">
        <label htmlFor="reservation">Je loue </label>
        <select name="reservation" id="reservation">
          <option value="option1">pour 72 heurs</option>
          <option value="option2">pour 1 semaine</option>
        </select>
        <strong className="price-games-list">10€</strong>
      </div>

      <div className="btn">
        <button className="btn-reservation" type="button">
          Louer le jeu
        </button>
        <button className="btn-back" type="button">
          Retour
        </button>
      </div>

      <div className="fav-icon">
        <img src={iconFav} alt="ajouter à mes favoris" />
      </div>
    </article>
  );
};

export default Game;
