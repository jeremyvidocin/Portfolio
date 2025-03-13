import React from 'react';

const Education = () => {
  const formations = [
    {
      periode: "2023 - 2025",
      titre: "BTS SIO Option SLAM",
      etablissement: "LGT Baimbridge, Abymes Guadeloupe",
      status: "En cours",
      details: [
        "Solutions Logicielles et Applications Métiers",
        "Développement d'applications",
        "Programmation orientée objet",
        "Base de données"
      ]
    },
    {
      periode: "2020 - 2023",
      titre: "Baccalauréat Général",
      etablissement: "LGT Droits de l'Homme, Petit-bourg Guadeloupe",
      status: "Diplômé",
      details: [
        "Spécialité Mathématiques",
        "Spécialité Numérique et Sciences Informatiques (NSI)",
        "Obtention en 2023"
      ]
    }
  ];

  return (
    <section className="section bg-zinc-900/50" id="education">
      <div className="container mx-auto px-4 py-16">
        <h2 className="headline-2 text-center mb-16">Formation</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Carte principale */}
              <div className="bg-zinc-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                {/* En-tête avec période et statut */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-400 font-mono">{formation.periode}</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    formation.status === "En cours" 
                      ? "bg-green-500/20 text-green-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}>
                    {formation.status}
                  </span>
                </div>

                {/* Contenu principal */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{formation.titre}</h3>
                    <p className="text-zinc-400">{formation.etablissement}</p>
                  </div>

                  {/* Détails avec effet de hover */}
                  <div className="bg-zinc-900/50 rounded-lg p-4 space-y-2">
                    {formation.details.map((detail, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;