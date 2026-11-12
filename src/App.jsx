import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Accueil from './pages/Accueil';
import Tickets from './pages/Tickets';
import DetailTicket from './pages/DetailTicket';
import PageIntrouvable from './pages/PageIntrouvable';
import TicketForm from './components/TicketForm';
import './App.css';

const API = "http://localhost:3001/tickets";

function App() {
  const [tickets, setTickets] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function charger() {
      try {
        const reponse = await fetch(API);
        if (!reponse.ok) throw new Error("Erreur " + reponse.status);
        setTickets(await reponse.json());
      } catch (e) {
        setErreur(e.message);
      } finally {
        setChargement(false);
      }
    }
    charger();
  }, []);

  async function supprimerTicket(id) {
    try {
      const reponse = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!reponse.ok) throw new Error("Erreur " + reponse.status);
      setTickets((anciens) => anciens.filter((t) => t.id !== id));
    } catch (e) {
      setErreur(e.message);
    }
  }

  async function changerStatut(id, nouveauStatut) {
    try {
      const reponse = await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ statut: nouveauStatut }),
      });
      if (!reponse.ok) throw new Error("Erreur " + reponse.status);
      setTickets((anciens) => anciens.map((t) => (t.id === id ? { ...t, statut: nouveauStatut } : t)));
    } catch (e) {
      setErreur(e.message);
    }
  }

  async function ajouterTicket(form) {
    try {
      const reponse = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, statut: "Ouvert" }),
      });
      if (!reponse.ok) throw new Error("Erreur " + reponse.status);
      const nouveauTicket = await reponse.json();
      setTickets((anciens) => [...anciens, nouveauTicket]);
      navigate("/tickets");
    } catch (e) {
      setErreur(e.message);
    }
  }

  return (
    <div>
      <Header />
      <main className="contenu">
        {chargement && <p className="message">Chargement...</p>}
        {erreur && <p className="message message-erreur">Problème avec l'API : {erreur}</p>}
        {!chargement && !erreur && (
          <Routes>
            <Route path="/" element={<Accueil tickets={tickets} />} />
            <Route
              path="/tickets"
              element={<Tickets tickets={tickets} supprimerTicket={supprimerTicket} changerStatut={changerStatut} />}
            />
            <Route path="/tickets/nouveau" element={<TicketForm onAjouter={ajouterTicket} />} />
            <Route path="/tickets/:id" element={<DetailTicket tickets={tickets} />} />
            <Route path="*" element={<PageIntrouvable />} />
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
