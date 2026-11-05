import { useState } from 'react';
import Header from './components/Header';
import Ticket from './components/Ticket';
import './App.css';

const tickets = [
  { id: 1, titre: "Imprimante en panne", auteur: "M. Duchesne", priorite: "Haute", statut: "Ouvert" },
  { id: 2, titre: "Accès VPN refusé", auteur: "M. Fadi", priorite: "Moyenne", statut: "En cours" },
  { id: 3, titre: "Écran qui clignote", auteur: "M. Délio", priorite: "Basse", statut: "Résolu" },
];

function App() {
  const [traites, setTraites] = useState(0);

  return (
    <div>
      <Header />
      <p>Bienvenue sur l'application WebDev Solutions.</p>
      {tickets.map((t) => (
        <Ticket key={t.id} {...t} />
      ))}
      <p>Tickets traités : {traites}</p>
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
  );
}

export default App;