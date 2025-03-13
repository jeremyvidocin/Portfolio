import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Stagiaire en Développement",
      company: "GIDM",
      duration: "9 Décembre 2024 - 17 Janvier 2025",
      description: "Développement et maintenance de sites web pour divers clients.",
      imgSrc: "images/Capture d'écran 2025-03-06 124810.png"
    },
    {
      title: "Agent administratif",
      company: "URSSAF",
      duration: "Juillet 2024 - Septembre 2024",
      description: "Participation au développement de nouvelles fonctionnalités pour l'application web de l'entreprise.",
      imgSrc: "images/channels4_profile.jpg"
    },
    {
        title: "Stagiaire en Développement",
        company: "Alpha Developpement",
        duration: "Mai 2024 - Juin 2024",
        description: "Participation au développement de nouvelles fonctionnalités pour l'application web de l'entreprise.",
        imgSrc: "images/Capture d'écran 2025-03-06 124303.png"
      }
  ];

  return (
    <section className="section" id="experience">
      <div className="container mx-auto px-4 py-8">
        <h2 className="headline-2 reveal-up text-center mb-16">Mes Expériences Professionnelles</h2>
        
        <div className="relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-700" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Point sur la timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zinc-600 rounded-full" />
                
                {/* Carte d'expérience */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-zinc-800 p-5 rounded-xl transform transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-6 mb-6">
                      <figure className="img-box rounded-lg">
                        <img
                          src={experience.imgSrc}
                          width={44}
                          height={44}
                          alt={experience.company}
                          className="img-cover"
                        />
                      </figure>
                      <div>
                        <h3 className="text-lg font-semibold">{experience.title}</h3>
                        <p className="text-zinc-400 text-sm">{experience.company}</p>
                        <p className="text-zinc-400 text-sm">{experience.duration}</p>
                      </div>
                    </div>
                    <p className="text-zinc-400">{experience.description}</p>
                  </div>
                </div>
                
                {/* Espace pour la ligne centrale */}
                <div className="w-2/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;