import { useState } from "react";

const formulaireVide = {
  titre: "", auteur: "", priorite: "Moyenne", description: "",
};

function TicketForm({ onAjouter }) {
  const [form, setForm] = useState(formulaireVide);
  const [erreurs, setErreurs] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. valider
    const nouvellesErreurs = {};
    if (form.titre.trim() === "") {
      nouvellesErreurs.titre = "Le titre est obligatoire.";
    } else if (form.titre.trim().length < 5) {
      nouvellesErreurs.titre = "Le titre doit contenir au moins 5 caractères.";
    }
    if (form.auteur.trim() === "") {
      nouvellesErreurs.auteur = "L'auteur est obligatoire.";
    }
    setErreurs(nouvellesErreurs);

    if (Object.keys(nouvellesErreurs).length > 0) {
      return;
    }

    onAjouter(form);

    setForm(formulaireVide);
  };

  return (
    <form className="formulaire" onSubmit={handleSubmit}>
      <h2>Nouveau ticket</h2>

      <div className="champ">
        <label>Titre : </label>
        <input type="text" name="titre" value={form.titre} onChange={handleChange} />
        {erreurs.titre && <p className="erreur">{erreurs.titre}</p>}
      </div>

      <div className="champ">
        <label>Auteur : </label>
        <input type="text" name="auteur" value={form.auteur} onChange={handleChange} />
        {erreurs.auteur && <p className="erreur">{erreurs.auteur}</p>}
      </div>

      <div className="champ">
        <label>Priorité : </label>
        <select name="priorite" value={form.priorite} onChange={handleChange}>
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
      </div>

      <div className="champ">
        <label>Description : </label>
        <textarea name="description" value={form.description} onChange={handleChange} />
      </div>

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TicketForm;
