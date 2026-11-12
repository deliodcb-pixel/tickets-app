import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="entete">
      <h1>Gestion des tickets</h1>
      <nav className="menu">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/tickets" end>Tickets</NavLink>
        <NavLink to="/tickets/nouveau">Nouveau ticket</NavLink>
      </nav>
    </header>
  );
}

export default Header;
