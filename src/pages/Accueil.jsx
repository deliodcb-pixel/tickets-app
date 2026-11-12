import { useState } from 'react';
import Badge from '../components/Badge';

const statuts = ["Ouvert", "En cours", "Résolu"];

function Accueil({ tickets }) {
  const [traites, setTraites] = useState(0);

  return (
    <div>
      <p>Bienvenue sur l'application WebDev Solutions.</p>

      <h2>Statistiques</h2>
      <div className="statistiques">
        <div className="stat">
          <span className="stat-nombre">{tickets.length}</span>
          <span>ticket(s) au total</span>
        </div>
        {statuts.map((statut) => (
          <div className="stat" key={statut}>
            <span className="stat-nombre">{tickets.filter((t) => t.statut === statut).length}</span>
            <Badge valeur={statut} />
          </div>
        ))}
      </div>

      <p>Tickets traités : {traites}</p>
      <div className="boutons">
        <button onClick={() => setTraites(traites + 1)}>
          Marquer un ticket comme traité
        </button>
        <button onClick={() => setTraites(Math.max(traites - 1, 0))}>
          Annuler
        </button>
        <button onClick={() => setTraites(0)}>
          Remettre à zéro
        </button>
      </div>
    </div>
  );
}

export default Accueil;
