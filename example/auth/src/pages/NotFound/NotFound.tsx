import { Link } from "react-router-dom";
import "./notfound.css";

export function NotFound() {
  return (
    <div className="container">
      <div className="notFoundContainer">
        <h1 className="notFoundTitle">404</h1>
        <h2>Página não encontrada</h2>
        <p>A página que você está procurando não existe.</p>
        <Link to="/" className="backButton">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}