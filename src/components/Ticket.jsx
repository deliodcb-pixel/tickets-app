function Ticket({ titre, auteur, priorite, statut }) {
  let couleur;
  if (statut === 'Ouvert') {
    couleur = 'red';
  } else if (statut === 'En cours') {
    couleur = 'orange';
  } else if (statut === 'Résolu') {
    couleur = 'green';
  }

  return (
    <div className="ticket">
      <h3>{titre}</h3>
      <p>Déclaré par : {auteur}</p>
      <p>Priorité : {priorite}</p>
      <p style={{ color: couleur }}>Statut : {statut}</p>
    </div>
  );
}

export default Ticket;