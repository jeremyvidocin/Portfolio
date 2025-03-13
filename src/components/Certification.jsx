import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Certification en Développement Web",
      issuer: "Institut XYZ",
      date: "Mars 2022",
      imgSrc: "/images/institut-xyz.png",
      category: "Web"
    },
    {
      title: "Certification en JavaScript",
      issuer: "Académie ABC",
      date: "Juin 2021",
      imgSrc: "/images/academie-abc.png",
      category: "Programming"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon",
      date: "Janvier 2023",
      imgSrc: "/images/aws.png",
      category: "Cloud"
    },
    {
      title: "React Advanced",
      issuer: "Meta",
      date: "Avril 2023",
      imgSrc: "/images/meta.png",
      category: "Web"
    }
  ];

  return (
    <section className="section bg-zinc-900/50" id="certifications">
      <div className="container mx-auto px-4 py-16">
        <h2 className="headline-2 text-center mb-16">Mes Certifications</h2>
        
        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] mx-auto max-w-7xl">
          {certifications.map((certification, index) => (
            <div 
              key={index} 
              className="break-inside-avoid mb-6 transition-transform hover:-translate-y-1"
            >
              <div className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all">
                <div className="flex items-start gap-4">
                  {/* Image */}
                  <figure className="flex-shrink-0">
                    <img
                      src={certification.imgSrc}
                      width={48}
                      height={48}
                      alt={certification.issuer}
                      className="rounded-lg object-cover transition-transform hover:scale-110"
                    />
                  </figure>

                  {/* Content */}
                  <div className="flex-grow">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 mb-2">
                      {certification.category}
                    </span>
                    
                    {/* Title & Details */}
                    <h3 className="text-lg font-semibold leading-tight mb-2">
                      {certification.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-1">
                      {certification.issuer}
                    </p>
                    <p className="text-zinc-500 text-sm">
                      {certification.date}
                    </p>
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

export default Certifications;