import { Link } from 'react-router-dom';

import './MenuFooter.scss';

const MenuFooter = () => {
  return (
    <div className="MenuFooter">
      <ul className="list-menu-footer">
        <Link className="btnFooter" to="/Apropos">
          <li>A propos</li>
        </Link>

        <Link className="btnFooter" to="/conditionsgenerales">
          <li>Conditions générales de vente</li>
        </Link>
        <Link className="btnFooter" to="/mentionslegales">
          <li>Mentions Légales</li>
        </Link>
      </ul>
      <p>copyright playpal 2024</p>
    </div>
  );
};

export default MenuFooter;
