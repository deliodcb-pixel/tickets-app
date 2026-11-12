import { useParams } from 'react-router-dom';
import Badge from '../components/Badge';

function DetailTicket({ tickets }) {
  const { id } = useParams();
  const ticket = tickets.find((t) => t.id === id);

  if (!ticket) {
    return <p className="message">Ticket introuvable.</p>;
  }

  return (
    <div className="detail-ticket">
      <h2>{ticket.titre}</h2>
      <p>Déclaré par : {ticket.auteur}</p>
      <p>Priorité : <Badge valeur={ticket.priorite} /></p>
      <p>Statut : <Badge valeur={ticket.statut} /></p>
      <p>Description : {ticket.description}</p>
    </div>
  );
}

export default DetailTicket;
