import Ticket from './Ticket';

function TicketList({ tickets, supprimerTicket, changerStatut }) {
  return (
    <div className="liste-tickets">
      {tickets.map((t) => (
        <Ticket key={t.id} {...t} supprimerTicket={supprimerTicket} changerStatut={changerStatut} />
      ))}
    </div>
  );
}

export default TicketList;
