import { useState } from 'react';
import TicketList from '../components/TicketList';

const ordrePriorite = { Haute: 1, Moyenne: 2, Basse: 3 };

function Tickets({ tickets, supprimerTicket, changerStatut }) {
  const [recherche, setRecherche] = useState("");
  const [statutFiltre, setStatutFiltre] = useState("Tous");
  const [tri, setTri] = useState("aucun");

  const ticketsAffiches = tickets
    .filter((t) => t.titre.toLowerCase().includes(recherche.toLowerCase()))
    .filter((t) => statutFiltre === "Tous" || t.statut === statutFiltre);

  if (tri === "priorite") {
    ticketsAffiches.sort((a, b) => ordrePriorite[a.priorite] - ordrePriorite[b.priorite]);
  }

  return (
    <div>
      <h2>Liste des tickets</h2>

      <div className="filtres">
        <div className="champ">
          <label>Rechercher : </label>
          <input
            type="text"
            placeholder="Titre du ticket"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>

        <div className="champ">
          <label>Statut : </label>
          <select value={statutFiltre} onChange={(e) => setStatutFiltre(e.target.value)}>
            <option value="Tous">Tous</option>
            <option value="Ouvert">Ouvert</option>
            <option value="En cours">En cours</option>
            <option value="Résolu">Résolu</option>
          </select>
        </div>

        <div className="champ">
          <label>Trier : </label>
          <select value={tri} onChange={(e) => setTri(e.target.value)}>
            <option value="aucun">Aucun tri</option>
            <option value="priorite">Priorité (Haute &gt; Moyenne &gt; Basse)</option>
          </select>
        </div>
      </div>

      <p className="compteur">{ticketsAffiches.length} ticket(s) affiché(s) sur {tickets.length}</p>

      <TicketList tickets={ticketsAffiches} supprimerTicket={supprimerTicket} changerStatut={changerStatut} />
    </div>
  );
}

export default Tickets;
