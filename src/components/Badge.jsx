const classes = {
  "Haute": "badge-haute",
  "Moyenne": "badge-moyenne",
  "Basse": "badge-basse",
  "Ouvert": "badge-ouvert",
  "En cours": "badge-en-cours",
  "Résolu": "badge-resolu",
};

function Badge({ valeur }) {
  return <span className={`badge ${classes[valeur]}`}>{valeur}</span>;
}

export default Badge;
