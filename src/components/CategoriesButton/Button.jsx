import { Link } from 'react-router-dom';
import './Button.scss';

const Button = () => {
  return (
    <>
      <Link className="BtnCate" to="/Catégorie">
        Catégorie
      </Link>
    </>
  );
};

export default Button;
