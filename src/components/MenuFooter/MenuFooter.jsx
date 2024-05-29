import { Link } from 'react-router-dom';
import './MenuFooter.scss';

const MenuFooter = () => {
  return (
    <div className="MenuFooter">
      <ul className="list-menu-footer">
        <li>A propos</li>

        <li>Conditions générales de vente</li>
        <li>Mentions légales</li>
      </ul>
      <p>copyright playpal 2024</p>
    </div>
  );
};

export default MenuFooter;
