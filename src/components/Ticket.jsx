import Badge from './Badge';

function Ticket({ titre, auteur, priorite, statut, supprimerTicket, changerStatut, id }) {
  return (
    <div className="ticket">
      <h3>{titre}</h3>
      <p>Déclaré par : {auteur}</p>
      <p>Priorité : <Badge valeur={priorite} /></p>
      <p>Statut : <Badge valeur={statut} /></p>
      <div className="ticket-actions">
        <select value={statut} onChange={(e) => changerStatut(id, e.target.value)}>
          <option value="Ouvert">Ouvert</option>
          <option value="En cours">En cours</option>
          <option value="Résolu">Résolu</option>
        </select>
        <button className="bouton-danger" onClick={() => supprimerTicket(id)}>Supprimer</button>
      </div>
    </div>
  );
}

export default Ticket;
