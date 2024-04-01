import { Link, NavLink } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import './error404.scss';
export default function Error404() {
  return (
    <div className="error404">
      <h1 className="error404__title">404</h1>
      <p className="error404__info">
        Oups! La page que vous
      </p>
      <p className="error404__info">
        demandez n'existe pas.
      </p>
      <NavLink to="/" className="error404__btn">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}
